describe('api.Entities tests', function () {
    function makeScriptAsset() {
        return new api.Asset({
            id: 1,
            uniqueId: 1,
            type: 'script',
            name: 'script',
            data: {
                scripts: {
                    test: {
                        attributes: {
                            entity: {
                                type: 'entity'
                            },
                            entityArray: {
                                type: 'entity',
                                array: true
                            },
                            json: {
                                type: 'json',
                                schema: [{
                                    name: 'entity',
                                    type: 'entity'
                                }, {
                                    name: 'entityArray',
                                    type: 'entity',
                                    array: true
                                }]
                            },
                            jsonArray: {
                                type: 'json',
                                array: true,
                                schema: [{
                                    name: 'entity',
                                    type: 'entity'
                                }, {
                                    name: 'entityArray',
                                    type: 'entity',
                                    array: true
                                }]
                            }
                        }
                    }
                }
            }
        });
    }

    beforeEach(() => {
        api.globals.history = null;
        api.globals.selection = null;
        api.globals.schema = null;
        api.globals.assets = null;
        api.globals.entities = new api.Entities();
    });

    it('add adds entity and get returns entity', function () {
        const e = new api.Entity();
        api.globals.entities.add(e);
        expect(api.globals.entities.get(e.get('resource_id'))).to.equal(e);
    });

    it('add does not add duplicate entity', function () {
        const e = new api.Entity();
        api.globals.entities.add(e);
        api.globals.entities.add(e);
        expect(api.globals.entities.list()).to.deep.equal([e]);
    });

    it('list returns array of entities', function () {
        const e = new api.Entity();
        api.globals.entities.add(e);
        expect(api.globals.entities.list()).to.deep.equal([e]);
    });

    it('returns root', function () {
        const p = new api.Entity();
        const c = new api.Entity();
        c.set('parent', p.get('resource_id'));
        p.insert('children', c.get('resource_id'));
        api.globals.entities.add(p);
        api.globals.entities.add(c);
        expect(api.globals.entities.root).to.equal(p);
    });

    it('creates entity', function () {
        const e = api.globals.entities.create({
            name: 'name'
        });

        expect(e).to.not.equal(null);
        expect(e.get('name')).to.equal('name');
        expect(api.globals.entities.get(e.get('resource_id'))).to.equal(e);
        expect(api.globals.entities.root).to.equal(e);
    });

    it('creates child entity', function () {
        const e = api.globals.entities.create({
            name: 'name'
        });
        const c = api.globals.entities.create({
            name: 'child',
            parent: e
        });

        expect(e.children).to.deep.equal([c]);
        expect(api.globals.entities.root).to.equal(e);
    });

    it('creates entity with component', function () {
        api.globals.schema = new api.Schema(schema);
        const e = api.globals.entities.create({
            components: {
                testcomponent: {
                    entityRef: 'test'
                }
            }
        });

        expect(e.has('components.testcomponent.entityRef')).to.equal(true);
    });

    it('undo create removes entity', function () {
        api.globals.history = new api.History();

        const e = api.globals.entities.create(null, {
            history: true
        });
        api.globals.history.undo();
        expect(api.globals.entities.get(e.get('resource_id'))).to.equal(null);
    });

    it('redo create adds new entity with same id', function () {
        api.globals.history = new api.History();

        const e = api.globals.entities.create(null, {
            history: true
        });
        api.globals.history.undo();
        api.globals.history.redo();

        expect(api.globals.entities.get(e.get('resource_id'))).to.not.equal(null);
    });

    it('create adds children too', function () {
        const e = api.globals.entities.create({
            name: 'parent',
            children: [{
                name: 'child',
                children: [{
                    name: 'subchild'
                }]
            }, {
                name: 'child2'
            }]
        });

        expect(e.children[0].get('name')).to.equal('child');
        expect(e.children[1].get('name')).to.equal('child2');
        expect(e.children[0].children[0].get('name')).to.equal('subchild');
    });

    it('delete removes entity', async function () {
        const e = api.globals.entities.create();
        await api.globals.entities.delete([e]);
        expect(api.globals.entities.get(e.get('resource_id'))).to.equal(null);
    });

    it('delete removes children', async function () {
        const e = api.globals.entities.create({
            name: 'parent',
            children: [{
                name: 'child'
            }]
        });

        const c = e.children[0];

        await api.globals.entities.delete([e]);

        expect(api.globals.entities.get(c.get('resource_id'))).to.equal(null);
        expect(api.globals.entities.get(e.get('resource_id'))).to.equal(null);
    });

    it('delete works when children are passed along with parents', async function () {
        const e = api.globals.entities.create({
            name: 'parent',
            children: [{
                name: 'child'
            }]
        });

        const c = e.children[0];

        await api.globals.entities.delete([c, e]);

        expect(api.globals.entities.get(c.get('resource_id'))).to.equal(null);
        expect(api.globals.entities.get(e.get('resource_id'))).to.equal(null);
    });

    it('undo delete brings back entities with same data as before', async function () {
        api.globals.history = new api.History();

        const e = api.globals.entities.create({
            name: 'parent',
            children: [{
                name: 'child'
            }]
        });

        const c = e.children[0];

        const eJson = e.json();
        const cJson = c.json();

        await api.globals.entities.delete([e]);

        api.globals.history.undo();

        expect(api.globals.entities.get(e.get('resource_id')).json()).to.deep.equal(eJson);
        expect(api.globals.entities.get(c.get('resource_id')).json()).to.deep.equal(cJson);

        api.globals.history.redo();
        api.globals.history.undo();

        expect(api.globals.entities.get(e.get('resource_id')).json()).to.deep.equal(eJson);
        expect(api.globals.entities.get(c.get('resource_id')).json()).to.deep.equal(cJson);
    });

    it('redo delete deletes entities', async function () {
        api.globals.history = new api.History();

        const e = api.globals.entities.create({
            name: 'parent',
            children: [{
                name: 'child'
            }]
        });

        const c = e.children[0];

        await api.globals.entities.delete([e]);

        api.globals.history.undo();
        api.globals.history.redo();

        expect(api.globals.entities.get(e.get('resource_id'))).to.equal(null);
        expect(api.globals.entities.get(c.get('resource_id'))).to.equal(null);
    });

    it('delete removes from selection', async function () {
        api.globals.history = new api.History();
        api.globals.selection = new api.Selection();

        const e = api.globals.entities.create(null, {
            select: true
        });

        expect(api.globals.selection.items).to.deep.equal([e]);
        await api.globals.entities.delete([e]);
        expect(api.globals.selection.items).to.deep.equal([]);

        // check undo brings back selection
        api.globals.history.undo();
        expect(api.globals.selection.items[0].get('resource_id')).to.equal(e.get('resource_id'));
    });

    it('delete removes entity references', async function () {
        api.globals.schema = new api.Schema(schema);
        api.globals.history = new api.History();
        api.globals.assets = new api.Assets();

        const script = makeScriptAsset();
        api.globals.assets.add(script);

        const root = api.globals.entities.create({
            name: 'root',
            children: [{
                name: 'child 1'
            }, {
                name: 'child 2',
                children: [{
                    name: 'sub child'
                }]
            }]
        });

        let c1 = root.findByName('child 1');
        const c2 = root.findByName('child 2');
        const c3 = root.findByName('sub child');

        const reference = c1.get('resource_id');
        [root, c1, c2, c3].forEach(e => {
            e.set('components.testcomponent', {
                entityRef: reference
            });
            e.set('components.script', {
                scripts: {
                    test: {
                        attributes: {
                            entity: reference,
                            entityArray: [reference, reference],
                            json: {
                                entity: reference,
                                entityArray: [reference, reference]
                            },
                            jsonArray: [{
                                entity: reference,
                                entityArray: [reference, reference]
                            }]
                        }
                    }
                }
            });
            expect(e.get('components.testcomponent.entityRef')).to.equal(reference);
            expect(e.get('components.script.scripts.test.attributes.entity')).to.equal(reference);
            expect(e.get('components.script.scripts.test.attributes.entityArray')).to.deep.equal([reference, reference]);
            expect(e.get('components.script.scripts.test.attributes.json.entity')).to.equal(reference);
            expect(e.get('components.script.scripts.test.attributes.json.entityArray')).to.deep.equal([reference, reference]);
            expect(e.get('components.script.scripts.test.attributes.jsonArray.0.entity')).to.equal(reference);
            expect(e.get('components.script.scripts.test.attributes.jsonArray.0.entityArray')).to.deep.equal([reference, reference]);
        });

        await api.globals.entities.delete([c1]);

        [root, c1, c2, c3].forEach(e => {
            expect(e.get('components.testcomponent.entityRef')).to.equal(null);
            expect(e.get('components.script.scripts.test.attributes.entity')).to.equal(null);
            expect(e.get('components.script.scripts.test.attributes.entityArray')).to.deep.equal([null, null]);
            expect(e.get('components.script.scripts.test.attributes.json.entity')).to.equal(null);
            expect(e.get('components.script.scripts.test.attributes.json.entityArray')).to.deep.equal([null, null]);
            expect(e.get('components.script.scripts.test.attributes.jsonArray.0.entity')).to.equal(null);
            expect(e.get('components.script.scripts.test.attributes.jsonArray.0.entityArray')).to.deep.equal([null, null]);
        });

        // test undo brings back references
        api.globals.history.undo();

        c1 = c1.latest();

        [root, c1, c2, c3].forEach(e => {
            expect(e.get('components.testcomponent.entityRef')).to.equal(reference);
            expect(e.get('components.script.scripts.test.attributes.entity')).to.equal(reference);
            expect(e.get('components.script.scripts.test.attributes.entityArray')).to.deep.equal([reference, reference]);
            expect(e.get('components.script.scripts.test.attributes.json.entity')).to.equal(reference);
            expect(e.get('components.script.scripts.test.attributes.json.entityArray')).to.deep.equal([reference, reference]);
            expect(e.get('components.script.scripts.test.attributes.jsonArray.0.entity')).to.equal(reference);
            expect(e.get('components.script.scripts.test.attributes.jsonArray.0.entityArray')).to.deep.equal([reference, reference]);
        });
    });

    it('create selects entity', function () {
        api.globals.selection = new api.Selection();

        const e = api.globals.entities.create(null, {
            select: true
        });

        expect(api.globals.selection.items).to.deep.equal([e]);
    });

    it('undo create restores previous selection', function () {
        api.globals.selection = new api.Selection();
        api.globals.history = new api.History();

        const e = api.globals.entities.create({
            name: 'e'
        });
        api.globals.selection.add(e);

        const e2 = api.globals.entities.create({
            name: 'e2'
        }, {
            select: true,
            history: true
        });

        api.globals.history.undo();

        expect(api.globals.selection.items).to.deep.equal([e]);

        api.globals.history.redo();

        expect(api.globals.selection.items.length).to.equal(1);
        expect(api.globals.selection.items[0].get('resource_id')).to.equal(e2.get('resource_id'));
    });

    it('reparent reparents entities', function () {
        const root = api.globals.entities.create({
            name: 'root'
        });

        const parent1 = api.globals.entities.create({
            name: 'parent 1',
            parent: root
        });

        const parent2 = api.globals.entities.create({
            name: 'parent 2',
            parent: root
        });

        const child = api.globals.entities.create({
            name: 'child',
            parent: parent1
        });

        api.globals.entities.reparent([{
            entity: child,
            parent: parent2,
            index: 0
        }]);

        expect(parent1.children).to.deep.equal([]);
        expect(parent2.children).to.deep.equal([child]);
        expect(child.parent).to.equal(parent2);

        const child2 = api.globals.entities.create({
            name: 'child 2',
            parent: parent1
        });

        api.globals.entities.reparent([{
            entity: child2,
            parent: parent2,
            index: 0
        }]);

        expect(parent1.children).to.deep.equal([]);
        expect(parent2.children).to.deep.equal([child2, child]);
        expect(child2.parent).to.equal(parent2);

        api.globals.entities.reparent([{
            entity: child2,
            parent: parent2,
            index: 1
        }]);

        expect(parent2.children).to.deep.equal([child, child2]);
    });

    it('reparent child to one of its children is not allowed', function () {
        const root = api.globals.entities.create();
        const parent = api.globals.entities.create({ parent: root });
        const child = api.globals.entities.create({ parent: parent });

        api.globals.entities.reparent([{
            entity: parent,
            parent: child
        }]);

        expect(child.children).to.deep.equal([]);
        expect(parent.parent).to.equal(root);
        expect(parent.children).to.deep.equal([child]);
    });

    it('undo / redo reparent', function () {
        api.globals.history = new api.History();

        const root = api.globals.entities.create({
            name: 'root'
        });

        const parent1 = api.globals.entities.create({
            name: 'parent 1',
            parent: root
        });

        const parent2 = api.globals.entities.create({
            name: 'parent 2',
            parent: root
        });

        const child = api.globals.entities.create({
            name: 'child',
            parent: parent1
        });

        api.globals.entities.reparent([{
            entity: child,
            parent: parent2,
            index: 0
        }]);

        expect(parent1.children).to.deep.equal([]);
        expect(parent2.children).to.deep.equal([child]);
        expect(child.parent).to.equal(parent2);

        api.globals.history.undo();

        expect(parent2.children).to.deep.equal([]);
        expect(parent1.children).to.deep.equal([child]);
        expect(child.parent).to.equal(parent1);

        api.globals.history.redo();

        expect(parent1.children).to.deep.equal([]);
        expect(parent2.children).to.deep.equal([child]);
        expect(child.parent).to.equal(parent2);
    });

    it('reparent multiple children preserves order and selection', function () {
        api.globals.history = new api.History();
        api.globals.selection = new api.Selection();
        const root = api.globals.entities.create();
        const parent1 = api.globals.entities.create({ parent: root });
        const parent2 = api.globals.entities.create({ parent: root });
        const child1 = api.globals.entities.create({ name: 'child1', parent: parent1 });
        const child2 = api.globals.entities.create({ name: 'child2', parent: parent1 });
        const child3 = api.globals.entities.create({ name: 'child3', parent: parent1 });
        const child4 = api.globals.entities.create({ name: 'child4', parent: parent1 });

        expect(parent1.children).to.deep.equal([child1, child2, child3, child4]);

        api.globals.selection.set([child1, child2, child4], { history: false });

        api.globals.entities.reparent([{
            entity: child1,
            parent: parent2,
            index: 0
        }, {
            entity: child2,
            parent: parent2,
            index: 1
        }, {
            entity: child4,
            parent: parent2,
            index: 2
        }]);
        expect(parent2.children).to.deep.equal([child1, child2, child4]);
        expect(api.globals.selection.items).to.deep.equal([child1, child2, child4]);

        api.globals.history.undo();

        expect(parent1.children).to.deep.equal([child1, child2, child3, child4]);
        expect(api.globals.selection.items).to.deep.equal([child1, child2, child4]);

        api.globals.entities.reparent([{
            entity: child1,
            parent: parent1,
            index: 3
        }, {
            entity: child2,
            parent: parent1,
            index: 2
        }, {
            entity: child3,
            parent: parent1,
            index: 1
        }, {
            entity: child4,
            parent: parent1,
            index: 0
        }]);
        expect(parent1.children).to.deep.equal([child4, child3, child2, child1]);
        expect(api.globals.selection.items).to.deep.equal([child1, child2, child4]);

        api.globals.history.undo();

        expect(parent1.children).to.deep.equal([child1, child2, child3, child4]);
        expect(api.globals.selection.items).to.deep.equal([child1, child2, child4]);
    });

    it('duplicate duplicates an entity', async function () {
        api.globals.history = new api.History();
        api.globals.schema = new api.Schema(schema);

        const root = api.globals.entities.create();

        const parent = api.globals.entities.create({
            name: 'parent',
            parent: root
        });

        const child = api.globals.entities.create({
            name: 'child',
            parent: parent
        });

        parent.addComponent('testcomponent', {
            entityRef: child.get('resource_id')
        });

        const duplicated = await api.globals.entities.duplicate([parent], {
            history: true
        });
        expect(duplicated.length).to.equal(1);
        expect(duplicated[0].get('name')).to.equal('parent');
        expect(duplicated[0].children.length).to.equal(1);
        expect(duplicated[0].children[0].get('name')).to.equal('child');
        expect(duplicated[0].get('components.testcomponent.entityRef')).to.equal(duplicated[0].children[0].get('resource_id'));
        expect(root.children).to.deep.equal([parent, duplicated[0]]);

        const jsonParent = duplicated[0].json();
        const jsonChild = duplicated[0].children[0].json();

        // test undo / redo
        api.globals.history.undo();
        expect(api.globals.entities.get(duplicated[0].get('resource_id'))).to.equal(null);
        expect(root.children).to.deep.equal([parent]);

        api.globals.history.redo();

        duplicated[0] = duplicated[0].latest();
        expect(duplicated[0].json()).to.deep.equal(jsonParent);
        expect(duplicated[0].children[0].json()).to.deep.equal(jsonChild);
        expect(root.children).to.deep.equal([parent, duplicated[0]]);
    });

    it('duplicate resolves entity references', async function () {
        api.globals.schema = new api.Schema(schema);

        const root = api.globals.entities.create();
        const parent = api.globals.entities.create({ name: 'parent' });
        const child = api.globals.entities.create({
            name: 'child',
            parent: parent
        });
        const parent2 = api.globals.entities.create({ name: 'parent2' });
        const parent3 = api.globals.entities.create({ name: 'parent3' });

        parent.addComponent('testcomponent', {
            entityRef: child.get('resource_id')
        });
        child.addComponent('testcomponent', {
            entityRef: parent.get('resource_id')
        });
        parent2.addComponent('testcomponent', {
            entityRef: parent2.get('resource_id')
        });
        parent3.addComponent('testcomponent', {
            entityRef: root.get('resource_id')
        });

        const dups = await api.globals.entities.duplicate([parent, parent2, parent3]);
        expect(dups[0].children[0].get('components.testcomponent.entityRef')).to.equal(dups[0].get('resource_id'));
        expect(dups[0].get('components.testcomponent.entityRef')).to.equal(dups[0].children[0].get('resource_id'));
        expect(dups[1].get('components.testcomponent.entityRef')).to.equal(dups[1].get('resource_id'));
        expect(dups[2].get('components.testcomponent.entityRef')).to.equal(root.get('resource_id'));
    });

    it('duplicate selects entities', async function () {
        api.globals.selection = new api.Selection();
        api.globals.history = new api.History();

        const root = api.globals.entities.create();

        const parent = api.globals.entities.create({
            name: 'parent',
            parent: root
        });

        const dups = await api.globals.entities.duplicate([parent], {
            history: true,
            select: true
        });

        expect(api.globals.selection.items).to.deep.equal(dups);

        // test undo / redo
        api.globals.history.undo();
        expect(api.globals.selection.items).to.deep.equal([]);

        api.globals.history.redo();
        expect(api.globals.selection.items).to.deep.equal(dups.map(e => e.latest()));
    });

    it('renames duplicated entities', async function () {
        const root = api.globals.entities.create();

        const parent = api.globals.entities.create({
            name: 'parent',
            parent: root
        });

        const dups = await api.globals.entities.duplicate([parent], {
            rename: true
        });

        expect(dups[0].get('name')).to.equal('parent2');

        dups[0] = await dups[0].duplicate({
            rename: true
        });

        expect(dups[0].get('name')).to.equal('parent3');

        const child = api.globals.entities.create({
            name: 'child',
            parent: dups[0]
        });

        dups[0] = await dups[0].duplicate({
            rename: true
        });
        expect(dups[0].children[0].get('name')).to.equal('child');

        dups[0] = await parent.duplicate({
            rename: true
        });

        expect(dups[0].get('name')).to.equal('parent5');
    });

    it('duplicate updates script attribute references', async function () {
        api.globals.assets = new api.Assets();
        api.globals.schema = new api.Schema(schema);

        const script = makeScriptAsset();

        api.globals.assets.add(script);

        const root = api.globals.entities.create();
        const entity = api.globals.entities.create({ parent: root });
        const id = entity.get('resource_id');

        entity.addComponent('script', {
            scripts: {
                test: {
                    attributes: {
                        entity: id,
                        entityArray: [id, id],
                        json: {
                            entity: id,
                            entityArray: [id, id]
                        },
                        jsonArray: [{
                            entity: id,
                            entityArray: [id, id]
                        }]
                    }
                }
            }
        });

        const dup = await entity.duplicate();
        const newId = dup.get('resource_id');
        expect(dup.get('components.script.scripts.test.attributes.entity')).to.equal(newId);
        expect(dup.get('components.script.scripts.test.attributes.entityArray')).to.deep.equal([newId, newId]);
        expect(dup.get('components.script.scripts.test.attributes.json.entity')).to.equal(newId);
        expect(dup.get('components.script.scripts.test.attributes.json.entityArray')).to.deep.equal([newId, newId]);
        expect(dup.get('components.script.scripts.test.attributes.jsonArray.0.entity')).to.equal(newId);
        expect(dup.get('components.script.scripts.test.attributes.jsonArray.0.entityArray')).to.deep.equal([newId, newId]);
    });

    it('duplicate updates template_ent_ids', async function () {
        api.globals.schema = new api.Schema(schema);

        const root = api.globals.entities.create();
        const entity = api.globals.entities.create({ parent: root });
        const child = api.globals.entities.create({ parent: entity });
        const templateEntIds = {};
        templateEntIds[entity.get('resource_id')] = pc.guid.create();
        templateEntIds[child.get('resource_id')] = pc.guid.create();
        // create a missing reference as well
        const missing = pc.guid.create();
        templateEntIds[missing] = pc.guid.create();
        entity.set('template_ent_ids', templateEntIds);

        const dup = await entity.duplicate();
        const newTemplateEntIds = dup.get('template_ent_ids');
        expect(Object.keys(newTemplateEntIds).length).to.equal(3);
        expect(newTemplateEntIds[dup.get('resource_id')]).to.equal(templateEntIds[entity.get('resource_id')]);
        expect(newTemplateEntIds[dup.children[0].get('resource_id')]).to.equal(templateEntIds[child.get('resource_id')]);

        delete newTemplateEntIds[dup.get('resource_id')];
        delete newTemplateEntIds[dup.children[0].get('resource_id')];
        expect(newTemplateEntIds[Object.keys(newTemplateEntIds)[0]]).to.equal(templateEntIds[missing]);
    });

    it('waitToExist waits for entities to be added', async function () {
        const e = api.globals.entities.create();
        api.globals.entities.remove(e);

        const promise = new Promise((resolve) => {
            api.globals.entities.waitToExist([e.get('resource_id')], 5000, (entities) => {
                expect(entities).to.deep.equal([e]);
                resolve();
            });
        });

        api.globals.entities.add(e);

        await promise;
    });

    it('cancel waitToExist stops waiting for entities to be added', async function () {
        const e = api.globals.entities.create();
        api.globals.entities.remove(e);

        let cancel;
        const promise = new Promise((resolve, reject) => {
            cancel = api.globals.entities.waitToExist([e.get('resource_id')], 200, (entities) => {
                // we should never get here
                reject(new Error('Wait to exist should have been canceled'));
            });

            setTimeout(() => {
                resolve();
            }, 300);
        });

        cancel();
        api.globals.entities.add(e);

        await promise;
    });
});
