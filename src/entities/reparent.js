import { globals as api } from '../globals';

/**
 * Reparents entities under new parent.
 *
 * @private
 * @typedef {import("../entities").ReparentArguments} ReparentArguments
 * @param {ReparentArguments[]} data - The reparenting data
 * @param {object} [options] - Options
 * @param {boolean} [options.preserverTransform] - Whether to preserve the transform of the entities
 * @param {boolean} [options.history] - Whether to record history. Defaults to true
 */
function reparentEntities(data, options = {}) {
    if (options.history === undefined) {
        options.history = true;
    }

    const records = data.map(entry => {
        const parentOld = entry.entity.parent;
        const indexOld = parentOld.get('children').indexOf(entry.entity.get('resource_id'));
        const record = {
            entity: entry.entity,
            resourceId: entry.entity.get('resource_id'),
            parentOld: parentOld,
            indOld: indexOld,
            parent: entry.parent,
            indNew: entry.index !== undefined && entry.index !== null ? entry.index : entry.parent.get('children').length
        };

        if (options.preserveTransform) {
            record.position = record.entity.viewportEntity.getPosition().clone();
            record.rotation = record.entity.viewportEntity.getRotation().clone();
        }

        return record;
    });

    const doReparent = (entity, parent, indNew, parentOld, indOld, recordIndex, position, rotation) => {
        const resourceId = entity.get('resource_id');
        if (parentOld.get('children').indexOf(resourceId) === -1 || (parent.get('children').indexOf(resourceId) !== -1 && parent !== parentOld))
            return false;

        // check if not reparenting to own child
        let deny = false;
        let checkParent = parent.parent;
        while (checkParent) {
            if (checkParent === entity) {
                deny = true;
                checkParent = null;
                break;
            }

            checkParent = checkParent.parent;
        }

        if (deny)
            return false;

        parentOld.history.enabled = false;
        parentOld.removeValue('children', resourceId);
        parentOld.history.enabled = true;

        parent.history.enabled = false;
        const off = parent !== parentOld ? 0 : ((indNew > indOld) ? (records.length - 1 - recordIndex) : 0);
        parent.insert('children', resourceId, indNew + off);
        parent.history.enabled = true;

        entity.history.enabled = false;
        entity.set('parent', parent.get('resource_id'));

        if (options.preserveTransform && position && entity.viewportEntity) {
            entity.viewportEntity.setPosition(position);
            entity.viewportEntity.setRotation(rotation);

            var localPosition = entity.viewportEntity.getLocalPosition();
            var localRotation = entity.viewportEntity.getLocalEulerAngles();
            entity.set('position', [localPosition.x, localPosition.y, localPosition.z]);
            entity.set('rotation', [localRotation.x, localRotation.y, localRotation.z]);
        }

        entity.history.enabled = true;

        return true;
    };

    const redo = () => {
        let dirty = false;
        records.forEach((record, i) => {
            const entity = record.entity.latest();
            if (!entity) return;

            const parent = record.parent.latest();
            const parentOld = entity.parent;
            if (!parentOld || !parent) return;

            if (doReparent(entity, parent, record.indNew, parentOld, record.indOld, i, record.position, record.rotation)) {
                dirty = true;
            }
        });

        return dirty;
    };

    const dirty = redo();
    if (dirty && options.history && api.history) {
        const undo = () => {
            records.forEach((record, i) => {
                const entity = record.entity.latest();
                if (!entity) return;

                const parent = entity.parent;
                if (!parent) return;

                const parentOld = record.parentOld.latest();
                if (!parentOld) return;

                doReparent(entity, parentOld, record.indOld, parent, record.indNew, i, record.position, record.rotation);
            });
        };

        api.history.add({
            name: 'reparent entities',
            undo: undo,
            redo: redo
        });
    }

}

export { reparentEntities };
