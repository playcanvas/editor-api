describe('api.Entities tests', function () {
    let entitiesApi;

    beforeEach(() => {
        api.globals.history = null;
        api.globals.selection = null;
        api.globals.schema = null;
        entitiesApi = new api.Entities();
    });

    it('add adds entity and get returns entity', function () {
        const e = new api.Entity(entitiesApi);
        entitiesApi.add(e);
        expect(entitiesApi.get(e.get('resource_id'))).to.equal(e);
    });

    it('add does not add duplicate entity', function () {
        const e = new api.Entity(entitiesApi);
        entitiesApi.add(e);
        entitiesApi.add(e);
        expect(entitiesApi.list()).to.deep.equal([e]);
    });

    it('list returns array of entities', function () {
        const e = new api.Entity(entitiesApi);
        entitiesApi.add(e);
        expect(entitiesApi.list()).to.deep.equal([e]);
    });

    it('returns root', function () {
        const p = new api.Entity(entitiesApi);
        const c = new api.Entity(entitiesApi);
        c.set('parent', p.get('resource_id'));
        p.insert('children', c.get('resource_id'));
        entitiesApi.add(p);
        entitiesApi.add(c);
        expect(entitiesApi.root).to.equal(p);
    });

    it('creates entity', function () {
        const e = entitiesApi.create({
            name: 'name'
        });

        expect(e).to.not.equal(null);
        expect(e.get('name')).to.equal('name');
        expect(entitiesApi.get(e.get('resource_id'))).to.equal(e);
        expect(entitiesApi.root).to.equal(e);
    });

    it('creates child entity', function () {
        const e = entitiesApi.create({
            name: 'name'
        });
        const c = entitiesApi.create({
            name: 'child',
            parent: e
        });

        expect(e.children).to.deep.equal([c]);
        expect(entitiesApi.root).to.equal(e);
    });

    it('creates entity with component', function () {
        api.globals.schema = new api.Schema(schema);
        const e = entitiesApi.create({
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

        const e = entitiesApi.create(null, {
            history: true
        });
        api.globals.history.undo();
        expect(entitiesApi.get(e.get('resource_id'))).to.equal(null);
    });

    it('redo create adds new entity with same id', function () {
        api.globals.history = new api.History();

        const e = entitiesApi.create(null, {
            history: true
        });
        api.globals.history.undo();
        api.globals.history.redo();

        expect(entitiesApi.get(e.get('resource_id'))).to.not.equal(null);
    });

    it('create adds children too', function () {
        const e = entitiesApi.create({
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

    it('delete removes entity', function () {
        const e = entitiesApi.create();
        entitiesApi.delete([e]);
        expect(entitiesApi.get(e.get('resource_id'))).to.equal(null);
    });

    it('delete removes children', function () {
        const e = entitiesApi.create({
            name: 'parent',
            children: [{
                name: 'child'
            }]
        });

        const c = e.children[0];

        entitiesApi.delete([e]);

        expect(entitiesApi.get(c.get('resource_id'))).to.equal(null);
        expect(entitiesApi.get(e.get('resource_id'))).to.equal(null);
    });

    it('delete works when children are passed along with parents', function () {
        const e = entitiesApi.create({
            name: 'parent',
            children: [{
                name: 'child'
            }]
        });

        const c = e.children[0];

        entitiesApi.delete([c, e]);

        expect(entitiesApi.get(c.get('resource_id'))).to.equal(null);
        expect(entitiesApi.get(e.get('resource_id'))).to.equal(null);
    });

    it('undo delete brings back entities with same data as before', function () {
        api.globals.history = new api.History();

        const e = entitiesApi.create({
            name: 'parent',
            children: [{
                name: 'child'
            }]
        });

        const c = e.children[0];

        const eJson = e.json();
        const cJson = c.json();

        entitiesApi.delete([e]);

        api.globals.history.undo();

        expect(entitiesApi.get(e.get('resource_id')).json()).to.deep.equal(eJson);
        expect(entitiesApi.get(c.get('resource_id')).json()).to.deep.equal(cJson);

        api.globals.history.redo();
        api.globals.history.undo();

        expect(entitiesApi.get(e.get('resource_id')).json()).to.deep.equal(eJson);
        expect(entitiesApi.get(c.get('resource_id')).json()).to.deep.equal(cJson);
    });

    it('redo delete deletes entities', function () {
        api.globals.history = new api.History();

        const e = entitiesApi.create({
            name: 'parent',
            children: [{
                name: 'child'
            }]
        });

        const c = e.children[0];

        entitiesApi.delete([e]);

        api.globals.history.undo();
        api.globals.history.redo();

        expect(entitiesApi.get(e.get('resource_id'))).to.equal(null);
        expect(entitiesApi.get(c.get('resource_id'))).to.equal(null);
    });

    it('delete removes from selection', function () {
        api.globals.history = new api.History();
        api.globals.selection = new api.Selection();

        const e = entitiesApi.create(null, {
            select: true
        });

        expect(api.globals.selection.items).to.deep.equal([e]);
        entitiesApi.delete([e]);
        expect(api.globals.selection.items).to.deep.equal([]);

        // check undo brings back selection
        api.globals.history.undo();
        expect(api.globals.selection.items[0].get('resource_id')).to.equal(e.get('resource_id'));
    });

    it('delete removes entity references', function () {
        api.globals.schema = new api.Schema(schema);
        api.globals.history = new api.History(schema);

        const root = entitiesApi.create({
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

        [root, c1, c2, c3].forEach(e => {
            e.set('components.testcomponent', {
                entityRef: c1.get('resource_id')
            });
            expect(e.get('components.testcomponent.entityRef')).to.equal(c1.get('resource_id'));
        });

        entitiesApi.delete([c1]);

        [root, c1, c2, c3].forEach(e => {
            expect(e.get('components.testcomponent.entityRef')).to.equal(null);
        });

        // test undo brings back references
        api.globals.history.undo();

        c1 = c1.latest();

        [root, c1, c2, c3].forEach(e => {
            expect(e.get('components.testcomponent.entityRef')).to.equal(c1.get('resource_id'));
        });
    });

    it('create selects entity', function () {
        api.globals.selection = new api.Selection();

        const e = entitiesApi.create(null, {
            select: true
        });

        expect(api.globals.selection.items).to.deep.equal([e]);
    });

    it('undo create restores previous selection', function () {
        api.globals.selection = new api.Selection();
        api.globals.history = new api.History();

        const e = entitiesApi.create({
            name: 'e'
        });
        api.globals.selection.add(e);

        const e2 = entitiesApi.create({
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
});
