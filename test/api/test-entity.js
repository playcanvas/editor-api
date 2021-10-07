describe('api.Entity tests', function () {

    this.beforeEach(() => {
        api.globals.entities = new api.Entities();
    });

    function addChildEntity(child, parent) {
        child.set('parent', parent.get('resource_id'));
        parent.insert('children', child.get('resource_id'));
    }

    it('get returns value', function () {
        const e = new api.Entity();
        expect(e.get('position')).to.deep.equal([0, 0, 0]);
    });

    it('set sets value', function () {
        const e = new api.Entity();
        e.set('position', [1, 2, 3]);
        expect(e.get('position')).to.deep.equal([1, 2, 3]);
    });

    it('insert inserts value', function () {
        const e = new api.Entity();
        e.insert('children', 'a');
        e.insert('children', 'b', 0);
        expect(e.get('children')).to.deep.equal(['b', 'a']);
    });

    it('returns children', function () {
        const p = new api.Entity();
        api.globals.entities.add(p);

        const c = new api.Entity();
        addChildEntity(c, p);
        api.globals.entities.add(c);

        expect(p.children).to.deep.equal([c]);
    });

    it('returns parent', function () {
        const p = new api.Entity();
        api.globals.entities.add(p);

        const c = new api.Entity();
        addChildEntity(c, p);
        api.globals.entities.add(c);

        expect(c.parent).to.equal(p);
    });

    it('findByName finds self', function () {
        const e = new api.Entity();
        e.set('name', 'self');
        api.globals.entities.add(e);
        expect(e.findByName('self')).to.equal(e);
    });

    it('findByName finds first child', function () {
        const p = new api.Entity();
        p.set('name', 'parent');
        api.globals.entities.add(p);

        const c = new api.Entity();
        c.set('name', 'child');
        addChildEntity(c, p);
        api.globals.entities.add(c);
        expect(p.findByName('child')).to.equal(c);
    });

    it('findByName finds deep child using DFS', function () {
        const p = new api.Entity();
        p.set('name', 'parent');
        api.globals.entities.add(p);

        const c = new api.Entity();
        c.set('name', 'child 1');
        addChildEntity(c, p);
        api.globals.entities.add(c);

        const c2 = new api.Entity();
        c2.set('name', 'desired');
        addChildEntity(c2, p);
        api.globals.entities.add(c2);

        const c3 = new api.Entity();
        c3.set('name', 'desired');
        addChildEntity(c3, c);
        api.globals.entities.add(c3);

        expect(p.findByName('desired')).to.equal(c3);
    });

    it('listByTag returns empty array if tag not found', function () {
        const p = new api.Entity();
        api.globals.entities.add(p);
        expect(p.listByTag('t')).to.deep.equal([]);
    });

    it('listByTag returns entities for 1 tag', function () {
        const p = new api.Entity();
        p.set('tags', ['t']);
        api.globals.entities.add(p);
        expect(p.listByTag('t')).to.deep.equal([p]);
    });

    it('listByTag returns entities for 2 tags using OR', function () {
        const e = new api.Entity();
        e.set('tags', ['t']);
        api.globals.entities.add(e);

        const e2 = new api.Entity();
        e2.set('tags', ['t2']);
        addChildEntity(e2, e);
        api.globals.entities.add(e2);

        const e3 = new api.Entity();
        e3.set('tags', ['t3']);
        addChildEntity(e3, e);
        api.globals.entities.add(e3);

        expect(e.listByTag('t2', 't3')).to.deep.equal([e2, e3]);
    });

    it('listByTag returns entities for 2 tags using AND', function () {
        const e = new api.Entity();
        e.set('tags', ['t']);
        api.globals.entities.add(e);

        const e2 = new api.Entity();
        e2.set('tags', ['t2', 't3']);
        addChildEntity(e2, e);
        api.globals.entities.add(e2);

        const e3 = new api.Entity();
        e3.set('tags', ['t3']);
        addChildEntity(e3, e);
        api.globals.entities.add(e3);

        expect(e.listByTag(['t2', 't3'])).to.deep.equal([e2]);
    });

    it('filter returns empty array', function () {
        const e = new api.Entity();
        expect(e.filter(entity => false)).to.deep.equal([]);
    });

    it('filter returns results', function () {
        const e = new api.Entity();
        expect(e.filter(entity => entity.get('position')[0] === 0)).to.deep.equal([e]);
    });

    it('addChild adds a child', function () {
        const e = new api.Entity();
        api.globals.entities.add(e);

        const c = new api.Entity();
        e.addChild(c);
        api.globals.entities.add(c);

        expect(e.children).to.deep.equal([c]);
    });

    it('addChild does not add duplicate child', function () {
        const e = new api.Entity();
        api.globals.entities.add(e);

        const c = new api.Entity();
        e.addChild(c);
        api.globals.entities.add(c);

        e.addChild(c);

        expect(e.children).to.deep.equal([c]);
    });

    it('insertChild adds a child at index', function () {
        const e = new api.Entity();
        api.globals.entities.add(e);

        const c = new api.Entity();
        e.addChild(c);
        api.globals.entities.add(c);

        const c2 = new api.Entity();
        e.insertChild(c2, 0);
        api.globals.entities.add(c2);

        expect(e.children).to.deep.equal([c2, c]);
    });

    it('addComponent adds default component data', function () {
        api.globals.schema = new api.Schema(schema);
        const e = api.globals.entities.create();
        e.addComponent('testcomponent');
        expect(e.has('components.testcomponent.entityRef')).to.equal(true);
    });

    it('addComponent accepts partial data', function () {
        api.globals.schema = new api.Schema(schema);
        const e = api.globals.entities.create();
        e.addComponent('testcomponent', {
            entityRef: e.get('resource_id')
        });
        expect(e.get('components.testcomponent.entityRef')).to.equal(e.get('resource_id'));
    });

    it('removeComponent removes component', function () {
        api.globals.schema = new api.Schema(schema);
        const e = api.globals.entities.create();
        e.addComponent('testcomponent');
        expect(e.has('components.testcomponent')).to.equal(true);
        e.removeComponent('testcomponent');
        expect(e.has('components.testcomponent')).to.equal(false);
    });

    it('isDescendant returns true for child', function () {
        const root = api.globals.entities.create();
        const child = api.globals.entities.create({ parent: root });
        expect(child.isDescendantOf(root)).to.equal(true);
        expect(child.isDescendantOf(child)).to.equal(false);
        expect(root.isDescendantOf(child)).to.equal(false);
        expect(root.isDescendantOf(root)).to.equal(false);
    });

    it('observer events are emitted by entity', function () {
        const e = api.globals.entities.create();
        let evtNameSet = false;
        let evtSet = false;
        e.once('name:set', () => {
            evtNameSet = true;
        });
        e.once('*:set', () => {
            evtSet = true;
        });

        e.set('name', 'test');

        expect(evtNameSet).to.equal(true);
        expect(evtSet).to.equal(true);
    });

    it('enabled flag in constructor is respected', function () {
        const e = new api.Entity();
        expect(e.get('enabled')).to.equal(true);

        const e2 = new api.Entity({
            enabled: false
        });
        expect(e2.get('enabled')).to.equal(false);

        const e3 = new api.Entity({
            enabled: true
        });
        expect(e3.get('enabled')).to.equal(true);

        const e4 = new api.Entity({
            enabled: 'something'
        });
        expect(e4.get('enabled')).to.equal(true);
    });

    it('name in constructor is valid', function () {
        const e = new api.Entity();
        expect(e.get('name')).to.equal('New Entity');

        const e2 = new api.Entity({ name: null });
        expect(e2.get('name')).to.equal('New Entity');

        const e3 = new api.Entity({ name: 'test' });
        expect(e3.get('name')).to.equal('test');

        const e4 = new api.Entity({ name: '' });
        expect(e4.get('name')).to.equal('');
    });
});
