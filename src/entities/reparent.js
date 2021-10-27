import { globals as api } from '../globals';

/**
 * Reparents entities under new parent.
 *
 * @private
 * @typedef {import("../entities").ReparentArguments} ReparentArguments
 * @param {ReparentArguments[]} data - The reparenting data
 * @param {object} [options] - Options
 * @param {boolean} [options.preserveTransform] - Whether to preserve the transform of the entities
 * @param {boolean} [options.history] - Whether to record history. Defaults to true
 */
function reparentEntities(data, options = {}) {
    if (options.history === undefined) {
        options.history = true;
    }

    const records = data.map((entry) => {
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

    // sort records by a field
    const sortRecords = (by) => {
        records.sort((a, b) => {
            return a[by] - b[by];
        });
    };

    const isValidRecord = (entity, parentOld, parent) => {
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

        return !deny;
    };


    const doReparent = (entity, parent, indNew, position, rotation) => {
        const history = {
            parent: parent.history.enabled,
            entity: entity.history.enabled
        };

        parent.history.enabled = false;
        if (indNew !== -1 && indNew <= parent.get('children').length) {
            parent.insert('children', entity.get('resource_id'), indNew);
        } else {
            parent.insert('children', entity.get('resource_id'));
        }
        parent.history.enabled = history.parent;

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

        entity.history.enabled = history.entity;
    };

    const redo = () => {
        sortRecords('indNew');

        const latest = (record) => {
            const entity = record.entity.latest();
            if (!entity) return;

            const parent = record.parent.latest();
            const parentOld = entity.parent;
            if (!parentOld || !parent) return;

            return { entity, parent, parentOld };
        };

        const validRecords = [];
        records.forEach((record, i) => {
            const data = latest(record);
            if (!data) return;

            if (isValidRecord(data.entity, data.parentOld, data.parent)) {
                validRecords.push(record);
            }
        });

        if (!validRecords.length) return false;

        // remember selection
        let selection;
        let selectionHistory;
        if (api.selection)  {
            selection = api.selection.items;
            selectionHistory = api.selection.history.enabled;
            api.selection.history.enabled = false;
        }

        // remove all children from old parents
        validRecords.forEach((record) => {
            const parentOld = record.entity.latest().parent;
            const history = parentOld.history.enabled;
            parentOld.history.enabled = false;
            parentOld.removeValue('children', record.resourceId);
            parentOld.history.enabled = history;
        });

        // reparent
        validRecords.forEach((record) => {
            const data = latest(record);

            doReparent(
                data.entity,
                data.parent,
                record.indNew,
                record.position,
                record.rotation
            );
        });

        // restore selection
        if (selection) {
            api.selection.set(selection, { history: false });
            api.selection.history.enabled = selectionHistory;
        }

        return true;
    };

    const dirty = redo();
    if (dirty && options.history && api.history) {
        const undo = () => {
            sortRecords('indOld');

            const latest = (record) => {
                const entity = record.entity.latest();
                if (!entity) return;

                const parent = entity.parent;
                if (!parent) return;

                const parentOld = record.parentOld.latest();
                if (!parentOld) return;

                return { entity, parent, parentOld };
            };

            const validRecords = [];

            records.forEach((record) => {
                const data = latest(record);
                if (!data) return;

                if (isValidRecord(data.entity, data.parent, data.parentOld)) {
                    validRecords.push(record);
                }
            });

            if (!validRecords.length) return;

            // remember selection
            let selection;
            let selectionHistory;
            if (api.selection)  {
                selection = api.selection.items;
                selectionHistory = api.selection.history.enabled;
                api.selection.history.enabled = false;
            }

            // remove all children from parents
            validRecords.forEach((record) => {
                const parent = record.entity.latest().parent;
                const history = parent.history.enabled;
                parent.history.enabled = false;
                parent.removeValue('children', record.resourceId);
                parent.history.enabled = history;
            });

            // reparent
            validRecords.forEach((record) => {
                const data = latest(record);

                doReparent(
                    data.entity,
                    data.parentOld,
                    record.indOld,
                    record.position,
                    record.rotation
                );
            });

            // restore selection
            if (selection) {
                api.selection.set(selection, { history: false });
                api.selection.history.enabled = selectionHistory;
            }
        };

        api.history.add({
            name: 'reparent entities',
            undo: undo,
            redo: redo
        });
    }

}

export { reparentEntities };
