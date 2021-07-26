describe('api.Entity tests', function () {
    let entitiesApi;

    this.beforeEach(() => {
        entitiesApi = new api.Entities();
    });

    function addChildEntity(child, parent) {
        child.set('parent', parent.get('resource_id'));
        parent.insert('children', child.get('resource_id'));
    }

    it('get returns value', function () {
        const e = new api.Entity(entitiesApi);
        expect(e.get('position')).to.deep.equal([0, 0, 0]);
    });

    it('set sets value', function () {
        const e = new api.Entity(entitiesApi);
        e.set('position', [1, 2, 3]);
        expect(e.get('position')).to.deep.equal([1, 2, 3]);
    });

    it('insert inserts value', function () {
        const e = new api.Entity(entitiesApi);
        e.insert('children', 'a');
        e.insert('children', 'b', 0);
        expect(e.get('children')).to.deep.equal(['b', 'a']);
    });

    it('returns children', function () {
        const p = new api.Entity(entitiesApi);
        entitiesApi.add(p);

        const c = new api.Entity(entitiesApi);
        addChildEntity(c, p);
        entitiesApi.add(c);

        expect(p.children).to.deep.equal([c]);
    });

    it('returns parent', function () {
        const p = new api.Entity(entitiesApi);
        entitiesApi.add(p);

        const c = new api.Entity(entitiesApi);
        addChildEntity(c, p);
        entitiesApi.add(c);

        expect(c.parent).to.equal(p);
    });

    it('findByName finds self', function () {
        const e = new api.Entity(entitiesApi);
        e.set('name', 'self');
        entitiesApi.add(e);
        expect(e.findByName('self')).to.equal(e);
    });

    it('findByName finds first child', function () {
        const p = new api.Entity(entitiesApi);
        p.set('name', 'parent');
        entitiesApi.add(p);

        const c = new api.Entity(entitiesApi);
        c.set('name', 'child');
        addChildEntity(c, p);
        entitiesApi.add(c);
        expect(p.findByName('child')).to.equal(c);
    });

    it('findByName finds deep child using DFS', function () {
        const p = new api.Entity(entitiesApi);
        p.set('name', 'parent');
        entitiesApi.add(p);

        const c = new api.Entity(entitiesApi);
        c.set('name', 'child 1');
        addChildEntity(c, p);
        entitiesApi.add(c);

        const c2 = new api.Entity(entitiesApi);
        c2.set('name', 'desired');
        addChildEntity(c2, p);
        entitiesApi.add(c2);

        const c3 = new api.Entity(entitiesApi);
        c3.set('name', 'desired');
        addChildEntity(c3, c);
        entitiesApi.add(c3);

        expect(p.findByName('desired')).to.equal(c3);
    });

    it('listByTag returns empty array if tag not found', function () {
        const p = new api.Entity(entitiesApi);
        entitiesApi.add(p);
        expect(p.listByTag('t')).to.deep.equal([]);
    });

    it('listByTag returns entities for 1 tag', function () {
        const p = new api.Entity(entitiesApi);
        p.set('tags', ['t']);
        entitiesApi.add(p);
        expect(p.listByTag('t')).to.deep.equal([p]);
    });

    it('listByTag returns entities for 2 tags using OR', function () {
        const e = new api.Entity(entitiesApi);
        e.set('tags', ['t']);
        entitiesApi.add(e);

        const e2 = new api.Entity(entitiesApi);
        e2.set('tags', ['t2']);
        addChildEntity(e2, e);
        entitiesApi.add(e2);

        const e3 = new api.Entity(entitiesApi);
        e3.set('tags', ['t3']);
        addChildEntity(e3, e);
        entitiesApi.add(e3);

        expect(e.listByTag('t2', 't3')).to.deep.equal([e2, e3]);
    });

    it('listByTag returns entities for 2 tags using AND', function () {
        const e = new api.Entity(entitiesApi);
        e.set('tags', ['t']);
        entitiesApi.add(e);

        const e2 = new api.Entity(entitiesApi);
        e2.set('tags', ['t2', 't3']);
        addChildEntity(e2, e);
        entitiesApi.add(e2);

        const e3 = new api.Entity(entitiesApi);
        e3.set('tags', ['t3']);
        addChildEntity(e3, e);
        entitiesApi.add(e3);

        expect(e.listByTag(['t2', 't3'])).to.deep.equal([e2]);
    });

    it('filter returns empty array', function () {
        const e = new api.Entity(entitiesApi);
        expect(e.filter(entity => false)).to.deep.equal([]);
    });

    it('filter returns results', function () {
        const e = new api.Entity(entitiesApi);
        expect(e.filter(entity => entity.get('position')[0] === 0)).to.deep.equal([e]);
    });

    it('addChild adds a child', function () {
        const e = new api.Entity(entitiesApi);
        entitiesApi.add(e);

        const c = new api.Entity(entitiesApi);
        e.addChild(c);
        entitiesApi.add(c);

        expect(e.children).to.deep.equal([c]);
    });

    it('addChild does not add duplicate child', function () {
        const e = new api.Entity(entitiesApi);
        entitiesApi.add(e);

        const c = new api.Entity(entitiesApi);
        e.addChild(c);
        entitiesApi.add(c);

        e.addChild(c);

        expect(e.children).to.deep.equal([c]);
    });

    it('insertChild adds a child at index', function () {
        const e = new api.Entity(entitiesApi);
        entitiesApi.add(e);

        const c = new api.Entity(entitiesApi);
        e.addChild(c);
        entitiesApi.add(c);

        const c2 = new api.Entity(entitiesApi);
        e.insertChild(c2, 0);
        entitiesApi.add(c2);

        expect(e.children).to.deep.equal([c2, c]);
    });

    it('addComponent adds default component data', function () {
        api.globals.schema = new api.Schema(schema);
        const e = entitiesApi.create();
        e.addComponent('testcomponent');
        expect(e.has('components.testcomponent.entityRef')).to.equal(true);
    });

    it('addComponent accepts partial data', function () {
        api.globals.schema = new api.Schema(schema);
        const e = entitiesApi.create();
        e.addComponent('testcomponent', {
            entityRef: e.get('resource_id')
        });
        expect(e.get('components.testcomponent.entityRef')).to.equal(e.get('resource_id'));
    });

    it('removeComponent removes component', function () {
        api.globals.schema = new api.Schema(schema);
        const e = entitiesApi.create();
        e.addComponent('testcomponent');
        expect(e.has('components.testcomponent')).to.equal(true);
        e.removeComponent('testcomponent');
        expect(e.has('components.testcomponent')).to.equal(false);
    });
});
