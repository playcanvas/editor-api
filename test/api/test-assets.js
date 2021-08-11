describe('Assets API tests', function () {
    let assets;
    let sandbox;

    function validateCreateAsset(formData)  {

    }

    beforeEach(function () {
        api.globals.schema = null;
        api.globals.assets = new api.Assets();
        assets = api.globals.assets;
        sandbox = sinon.createSandbox();
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('lists assets', function () {
        const asset = new api.Asset({ type: 'material' });
        assets.add(asset);
        expect(assets.list()).to.deep.equal([asset]);
    });

    it('get returns asset', function () {
        const asset = new api.Asset({ type: 'material', id: 1 });
        assets.add(asset);
        expect(assets.get(1)).to.equal(asset);
    });

    it('getUnique returns asset', function () {
        const asset = new api.Asset({ type: 'material', id: 1, uniqueId: 2});
        assets.add(asset);
        expect(assets.getUnique(2)).to.equal(asset);
    });

    it('add does not add duplicate asset', function () {
        const asset = new api.Asset({ type: 'material', id: 1 });
        assets.add(asset);
        assets.add(asset);
        expect(assets.list()).to.deep.equal([asset]);
    });

    it('add sorts assets alphabetically', function () {
        const asset1 = new api.Asset({ type: 'material', id: 1, name: '1'});
        const asset2 = new api.Asset({ type: 'material', id: 2, name: '2'});
        const asset3 = new api.Asset({ type: 'material', id: 3, name: '3'});
        assets.add(asset2);
        assets.add(asset3);
        assets.add(asset1);
        expect(assets.list()).to.deep.equal([asset1, asset2, asset3]);
    });

    it('add puts folders first', function () {
        const asset1 = new api.Asset({ type: 'material', id: 1, name: '1'});
        const asset2 = new api.Asset({ type: 'material', id: 2, name: '2'});
        const asset3 = new api.Asset({ type: 'folder', id: 3, name: '3'});
        const asset4 = new api.Asset({ type: 'folder', id: 4, name: '4'});
        assets.add(asset1);
        assets.add(asset2);
        assets.add(asset4);
        assets.add(asset3);
        expect(assets.list()).to.deep.equal([asset3, asset4, asset1, asset2]);
    });

    it('changing asset name re-sorts assets', function () {
        const asset1 = new api.Asset({ type: 'material', id: 1, name: '1'});
        const asset2 = new api.Asset({ type: 'material', id: 2, name: '2'});
        const asset3 = new api.Asset({ type: 'folder', id: 3, name: '3'});
        const asset4 = new api.Asset({ type: 'folder', id: 4, name: '4'});
        assets.add(asset1);
        assets.add(asset2);
        assets.add(asset4);
        assets.add(asset3);
        expect(assets.list()).to.deep.equal([asset3, asset4, asset1, asset2]);

        asset3.set('name', '5');
        expect(assets.list()).to.deep.equal([asset4, asset3, asset1, asset2]);

        asset1.set('name', '6');
        expect(assets.list()).to.deep.equal([asset4, asset3, asset2, asset1]);
    });

    it('remove removes asset', function () {
        const asset = new api.Asset({ type: 'material', id: 1 });
        assets.add(asset);
        assets.remove(asset);
        expect(assets.list()).to.deep.equal([]);
    });

    it('clear removes all assets', function () {
        const asset = new api.Asset({ type: 'material', id: 1 });
        assets.add(asset);
        assets.clear();
        expect(assets.list()).to.deep.equal([]);
    });

    it('filter returns assets', function () {
        const asset1 = new api.Asset({ name: 'mat', type: 'material', id: 1 });
        const asset2 = new api.Asset({ name: 'tex', type: 'texture', id: 2 });
        assets.add(asset1);
        assets.add(asset2);
        expect(assets.filter(asset => asset.get('type') === 'material')).to.deep.equal([asset1]);
    });

    it('findOne returns asset', function () {
        const asset1 = new api.Asset({ name: 'mat', type: 'material', id: 1 });
        const asset2 = new api.Asset({ name: 'mat2', type: 'material', id: 2 });
        assets.add(asset1);
        assets.add(asset2);
        expect(assets.findOne(asset => asset.get('type') === 'material')).to.equal(asset1);
    });

    it('listByTag returns empty array if tag not found', function () {
        const asset = new api.Asset({ id: 1, type: 'material' });
        assets.add(asset);
        expect(assets.listByTag('t')).to.deep.equal([]);
    });

    it('listByTag returns assets for 1 tag', function () {
        const asset = new api.Asset({ id: 1, type: 'material' });
        asset.set('tags', ['t']);
        assets.add(asset);
        expect(assets.listByTag('t')).to.deep.equal([asset]);
    });

    it('listByTag returns assets for 2 tags using OR', function () {
        const asset1 = new api.Asset({ id: 1, type: 'material', name: '1' });
        asset1.set('tags', ['t']);
        assets.add(asset1);

        const asset2 = new api.Asset({ id: 2, type: 'material', name: '2' });
        asset2.set('tags', ['t2']);
        assets.add(asset2);

        const asset3 = new api.Asset({ id: 3, type: 'material', name: '3' });
        asset3.set('tags', ['t3']);
        assets.add(asset3);

        expect(assets.listByTag('t2', 't3')).to.deep.equal([asset2, asset3]);
    });

    it('listByTag returns assets for 2 tags using AND', function () {
        const asset1 = new api.Asset({ id: 1, type: 'material' });
        asset1.set('tags', ['t']);
        assets.add(asset1);

        const asset2 = new api.Asset({ id: 2, type: 'material' });
        asset2.set('tags', ['t2', 't3']);
        assets.add(asset2);

        const asset3 = new api.Asset({ id: 3, type: 'material' });
        asset3.set('tags', ['t3']);
        assets.add(asset3);

        expect(assets.listByTag(['t2', 't3'])).to.deep.equal([asset2]);
    });

    it('getAssetForScript returns asset', function () {
        const asset = new api.Asset({
            id: 1,
            type: 'script',
            data: {
                scripts: {
                    test: {}
                }
            }

        });
        assets.add(asset);

        expect(assets.getAssetForScript('test')).to.equal(asset);
        expect(assets.getAssetForScript('test2')).to.equal(null);
    });

    it('creates anim state graph', function () {
        sandbox.stub(window, 'fetch');

        api.globals.branchId = 'branch';
        api.globals.projectId = 1;
        api.globals.schema = new api.Schema(schema);

        const folder = new api.Asset({ id: 10 });
        api.globals.assets.createAnimStateGraph('name', null, folder);

        const fetchArgs = window.fetch.getCall(0).args;
        expect(fetchArgs[1].body instanceof FormData).to.equal(true);
        const data = fetchArgs[1].body;
        expect(data.get('branchId')).to.equal('branch');
        expect(data.get('projectId')).to.equal('1');
        expect(data.get('type')).to.equal('animstategraph');
        expect(data.get('name')).to.equal('name');
        expect(data.get('preload')).to.equal('true');
        expect(data.get('parent')).to.equal('10');
        expect(data.get('data')).to.equal(JSON.stringify({
            testData: 0
        }));
    });

    it('creates bundle', function () {
        sandbox.stub(window, 'fetch');

        api.globals.branchId = 'branch';
        api.globals.projectId = 1;
        api.globals.schema = new api.Schema(schema);

        const assets = [new api.Asset({ id: 1 })];
        const folder = new api.Asset({ id: 10 });
        api.globals.assets.createBundle('name', assets, folder);

        const fetchArgs = window.fetch.getCall(0).args;
        expect(fetchArgs[1].body instanceof FormData).to.equal(true);
        const data = fetchArgs[1].body;
        expect(data.get('branchId')).to.equal('branch');
        expect(data.get('projectId')).to.equal('1');
        expect(data.get('type')).to.equal('bundle');
        expect(data.get('name')).to.equal('name');
        expect(data.get('preload')).to.equal('true');
        expect(data.get('parent')).to.equal('10');
        expect(data.get('data')).to.equal(JSON.stringify({
            assets: [1]
        }));
    });

    it('creates css asset', async function () {
        sandbox.stub(window, 'fetch');

        api.globals.branchId = 'branch';
        api.globals.projectId = 1;

        const folder = new api.Asset({ id: 10 });
        api.globals.assets.createCss('name', 'text', folder);

        const fetchArgs = window.fetch.getCall(0).args;
        expect(fetchArgs[1].body instanceof FormData).to.equal(true);
        const data = fetchArgs[1].body;
        expect(data.get('branchId')).to.equal('branch');
        expect(data.get('projectId')).to.equal('1');
        expect(data.get('filename')).to.equal('asset.css');
        expect(data.get('file') instanceof Blob).to.equal(true);
        expect(await data.get('file').text()).to.equal('text');
        expect(data.get('type')).to.equal('css');
        expect(data.get('name')).to.equal('name');
        expect(data.get('parent')).to.equal('10');
        expect(data.get('preload')).to.equal('true');
    });

    it('creates cubemap asset', function () {
        sandbox.stub(window, 'fetch');

        api.globals.branchId = 'branch';
        api.globals.projectId = 1;
        api.globals.schema = new api.Schema(schema);

        const textures = [];
        for (let i = 0; i < 6; i++) {
            textures.push(new api.Asset({ id: i + 1 }));
        }

        const folder = new api.Asset({ id: 10 });
        api.globals.assets.createCubemap('name', textures, null, folder);

        const fetchArgs = window.fetch.getCall(0).args;
        expect(fetchArgs[1].body instanceof FormData).to.equal(true);
        const data = fetchArgs[1].body;
        expect(data.get('branchId')).to.equal('branch');
        expect(data.get('projectId')).to.equal('1');
        expect(data.get('type')).to.equal('cubemap');
        expect(data.get('name')).to.equal('name');
        expect(data.get('preload')).to.equal('true');
        expect(data.get('parent')).to.equal('10');
        expect(data.get('data')).to.equal(JSON.stringify({
            name: 'name',
            textures: [1, 2, 3, 4, 5, 6],
            minFilter: 5,
            magFilter: 1,
            anisotropy: 1
        }));
    });

    it('creates folder asset', function () {
        sandbox.stub(window, 'fetch');

        api.globals.branchId = 'branch';
        api.globals.projectId = 1;
        api.globals.schema = new api.Schema(schema);

        const textures = [];
        for (let i = 0; i < 6; i++) {
            textures.push(new api.Asset({ id: i + 1 }));
        }

        const folder = new api.Asset({ id: 10 });
        api.globals.assets.createFolder('name', folder);

        const fetchArgs = window.fetch.getCall(0).args;
        expect(fetchArgs[1].body instanceof FormData).to.equal(true);
        const data = fetchArgs[1].body;
        expect(data.get('branchId')).to.equal('branch');
        expect(data.get('projectId')).to.equal('1');
        expect(data.get('type')).to.equal('folder');
        expect(data.get('name')).to.equal('name');
        expect(data.get('parent')).to.equal('10');
        expect(data.get('preload')).to.equal('true');
    });

    it('creates html asset', async function () {
        sandbox.stub(window, 'fetch');

        api.globals.branchId = 'branch';
        api.globals.projectId = 1;

        const folder = new api.Asset({ id: 10 });
        api.globals.assets.createHtml('name', 'text', folder);

        const fetchArgs = window.fetch.getCall(0).args;
        expect(fetchArgs[1].body instanceof FormData).to.equal(true);
        const data = fetchArgs[1].body;
        expect(data.get('branchId')).to.equal('branch');
        expect(data.get('projectId')).to.equal('1');
        expect(data.get('filename')).to.equal('asset.html');
        expect(data.get('file') instanceof Blob).to.equal(true);
        expect(await data.get('file').text()).to.equal('text');
        expect(data.get('type')).to.equal('html');
        expect(data.get('name')).to.equal('name');
        expect(data.get('parent')).to.equal('10');
        expect(data.get('preload')).to.equal('true');
    });

    it('creates json asset', async function () {
        sandbox.stub(window, 'fetch');

        api.globals.branchId = 'branch';
        api.globals.projectId = 1;

        const folder = new api.Asset({ id: 10 });
        api.globals.assets.createJson('name', { test: 1 }, folder);

        const fetchArgs = window.fetch.getCall(0).args;
        expect(fetchArgs[1].body instanceof FormData).to.equal(true);
        const data = fetchArgs[1].body;
        expect(data.get('branchId')).to.equal('branch');
        expect(data.get('projectId')).to.equal('1');
        expect(data.get('filename')).to.equal('asset.json');
        expect(data.get('file') instanceof Blob).to.equal(true);
        expect(await data.get('file').text()).to.equal('{"test":1}');
        expect(data.get('type')).to.equal('json');
        expect(data.get('name')).to.equal('name');
        expect(data.get('parent')).to.equal('10');
        expect(data.get('preload')).to.equal('true');
    });

    it('creates i18n asset', async function () {
        sandbox.stub(window, 'fetch');

        api.globals.branchId = 'branch';
        api.globals.projectId = 1;

        const folder = new api.Asset({ id: 10 });
        api.globals.assets.createI18n('name', null, folder);

        const fetchArgs = window.fetch.getCall(0).args;
        expect(fetchArgs[1].body instanceof FormData).to.equal(true);
        const data = fetchArgs[1].body;
        expect(data.get('branchId')).to.equal('branch');
        expect(data.get('projectId')).to.equal('1');
        expect(data.get('filename')).to.equal('asset.json');
        expect(data.get('file') instanceof Blob).to.equal(true);
        expect(await data.get('file').text()).to.equal(JSON.stringify({
            "header": {
                "version": 1
            },
            "data": [{
                "info": {
                    "locale": "en-US"
                },
                "messages": {
                    "key": "Single key translation",
                    "key plural": ["One key translation", "Translation for {number} keys"]
                }
            }]
        }));
        expect(data.get('type')).to.equal('json');
        expect(data.get('name')).to.equal('name');
        expect(data.get('parent')).to.equal('10');
        expect(data.get('preload')).to.equal('true');
    });

    it('creates material asset', function () {
        sandbox.stub(window, 'fetch');

        api.globals.branchId = 'branch';
        api.globals.projectId = 1;
        api.globals.schema = new api.Schema(schema);

        const folder = new api.Asset({ id: 10 });
        api.globals.assets.createMaterial('name', null, folder);

        const fetchArgs = window.fetch.getCall(0).args;
        expect(fetchArgs[1].body instanceof FormData).to.equal(true);
        const data = fetchArgs[1].body;
        expect(data.get('branchId')).to.equal('branch');
        expect(data.get('projectId')).to.equal('1');
        expect(data.get('type')).to.equal('material');
        expect(data.get('name')).to.equal('name');
        expect(data.get('parent')).to.equal('10');
        expect(data.get('preload')).to.equal('true');
        expect(data.get('data')).to.equal(JSON.stringify({
            diffuse: [0, 0, 0]
        }));
    });

    it('creates shader asset', async function () {
        sandbox.stub(window, 'fetch');

        api.globals.branchId = 'branch';
        api.globals.projectId = 1;

        const folder = new api.Asset({ id: 10 });
        api.globals.assets.createShader('name', 'text', folder);

        const fetchArgs = window.fetch.getCall(0).args;
        expect(fetchArgs[1].body instanceof FormData).to.equal(true);
        const data = fetchArgs[1].body;
        expect(data.get('branchId')).to.equal('branch');
        expect(data.get('projectId')).to.equal('1');
        expect(data.get('filename')).to.equal('asset.glsl');
        expect(data.get('file') instanceof Blob).to.equal(true);
        expect(await data.get('file').text()).to.equal('text');
        expect(data.get('type')).to.equal('shader');
        expect(data.get('name')).to.equal('name');
        expect(data.get('parent')).to.equal('10');
        expect(data.get('preload')).to.equal('true');
    });

    it('creates sprite asset', function () {
        sandbox.stub(window, 'fetch');

        api.globals.branchId = 'branch';
        api.globals.projectId = 1;

        const atlas = new api.Asset({ id: 1 });
        const folder = new api.Asset({ id: 10 });
        api.globals.assets.createSprite('name', {
            textureAtlas: atlas
        }, folder);

        const fetchArgs = window.fetch.getCall(0).args;
        expect(fetchArgs[1].body instanceof FormData).to.equal(true);
        const data = fetchArgs[1].body;
        expect(data.get('branchId')).to.equal('branch');
        expect(data.get('projectId')).to.equal('1');
        expect(data.get('type')).to.equal('sprite');
        expect(data.get('name')).to.equal('name');
        expect(data.get('parent')).to.equal('10');
        expect(data.get('preload')).to.equal('true');
        expect(data.get('data')).to.equal(JSON.stringify({
            pixelsPerUnit: 100,
            frameKeys: [],
            textureAtlasAsset: 1,
            renderMode: 0
        }));
    });

    it('creates text asset', async function () {
        sandbox.stub(window, 'fetch');

        api.globals.branchId = 'branch';
        api.globals.projectId = 1;

        const folder = new api.Asset({ id: 10 });
        api.globals.assets.createText('name', 'text', folder);

        const fetchArgs = window.fetch.getCall(0).args;
        expect(fetchArgs[1].body instanceof FormData).to.equal(true);
        const data = fetchArgs[1].body;
        expect(data.get('branchId')).to.equal('branch');
        expect(data.get('projectId')).to.equal('1');
        expect(data.get('filename')).to.equal('asset.txt');
        expect(data.get('file') instanceof Blob).to.equal(true);
        expect(await data.get('file').text()).to.equal('text');
        expect(data.get('type')).to.equal('text');
        expect(data.get('name')).to.equal('name');
        expect(data.get('parent')).to.equal('10');
        expect(data.get('preload')).to.equal('true');
    });
});