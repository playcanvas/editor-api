describe('Assets API tests', function () {
    let assets;

    beforeEach(function () {
        assets = new api.Assets();
    });

    it('lists assets', function () {
        const asset = new api.Asset(assets, { type: 'material' });
        assets.add(asset);
        expect(assets.list()).to.deep.equal([asset]);
    });

    it('get returns asset', function () {
        const asset = new api.Asset(assets, { type: 'material', id: 1 });
        assets.add(asset);
        expect(assets.get(1)).to.equal(asset);
    });

    it('getUnique returns asset', function () {
        const asset = new api.Asset(assets, { type: 'material', id: 1, uniqueId: 2});
        assets.add(asset);
        expect(assets.getUnique(2)).to.equal(asset);
    });

    it('add does not add duplicate asset', function () {
        const asset = new api.Asset(assets, { type: 'material', id: 1 });
        assets.add(asset);
        assets.add(asset);
        expect(assets.list()).to.deep.equal([asset]);
    });

    it('add sorts assets alphabetically', function () {
        const asset1 = new api.Asset(assets, { type: 'material', id: 1, name: '1'});
        const asset2 = new api.Asset(assets, { type: 'material', id: 2, name: '2'});
        const asset3 = new api.Asset(assets, { type: 'material', id: 3, name: '3'});
        assets.add(asset2);
        assets.add(asset3);
        assets.add(asset1);
        expect(assets.list()).to.deep.equal([asset1, asset2, asset3]);
    });

    it('add puts folders first', function () {
        const asset1 = new api.Asset(assets, { type: 'material', id: 1, name: '1'});
        const asset2 = new api.Asset(assets, { type: 'material', id: 2, name: '2'});
        const asset3 = new api.Asset(assets, { type: 'folder', id: 3, name: '3'});
        const asset4 = new api.Asset(assets, { type: 'folder', id: 4, name: '4'});
        assets.add(asset1);
        assets.add(asset2);
        assets.add(asset4);
        assets.add(asset3);
        expect(assets.list()).to.deep.equal([asset3, asset4, asset1, asset2]);
    });

    it('changing asset name re-sorts assets', function () {
        const asset1 = new api.Asset(assets, { type: 'material', id: 1, name: '1'});
        const asset2 = new api.Asset(assets, { type: 'material', id: 2, name: '2'});
        const asset3 = new api.Asset(assets, { type: 'folder', id: 3, name: '3'});
        const asset4 = new api.Asset(assets, { type: 'folder', id: 4, name: '4'});
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
        const asset = new api.Asset(assets, { type: 'material', id: 1 });
        assets.add(asset);
        assets.remove(asset);
        expect(assets.list()).to.deep.equal([]);
    });

    it('clear removes all assets', function () {
        const asset = new api.Asset(assets, { type: 'material', id: 1 });
        assets.add(asset);
        assets.clear();
        expect(assets.list()).to.deep.equal([]);
    });

    it('filter returns assets', function () {
        const asset1 = new api.Asset(assets, { name: 'mat', type: 'material', id: 1 });
        const asset2 = new api.Asset(assets, { name: 'tex', type: 'texture', id: 2 });
        assets.add(asset1);
        assets.add(asset2);
        expect(assets.filter(asset => asset.get('type') === 'material')).to.deep.equal([asset1]);
    });

    it('findOne returns asset', function () {
        const asset1 = new api.Asset(assets, { name: 'mat', type: 'material', id: 1 });
        const asset2 = new api.Asset(assets, { name: 'mat2', type: 'material', id: 2 });
        assets.add(asset1);
        assets.add(asset2);
        expect(assets.findOne(asset => asset.get('type') === 'material')).to.equal(asset1);
    });

    it('listByTag returns empty array if tag not found', function () {
        const asset = new api.Asset(assets, { id: 1, type: 'material' });
        assets.add(asset);
        expect(assets.listByTag('t')).to.deep.equal([]);
    });

    it('listByTag returns assets for 1 tag', function () {
        const asset = new api.Asset(assets, { id: 1, type: 'material' });
        asset.set('tags', ['t']);
        assets.add(asset);
        expect(assets.listByTag('t')).to.deep.equal([asset]);
    });

    it('listByTag returns assets for 2 tags using OR', function () {
        const asset1 = new api.Asset(assets, { id: 1, type: 'material', name: '1' });
        asset1.set('tags', ['t']);
        assets.add(asset1);

        const asset2 = new api.Asset(assets, { id: 2, type: 'material', name: '2' });
        asset2.set('tags', ['t2']);
        assets.add(asset2);

        const asset3 = new api.Asset(assets, { id: 3, type: 'material', name: '3' });
        asset3.set('tags', ['t3']);
        assets.add(asset3);

        expect(assets.listByTag('t2', 't3')).to.deep.equal([asset2, asset3]);
    });

    it('listByTag returns assets for 2 tags using AND', function () {
        const asset1 = new api.Asset(assets, { id: 1, type: 'material' });
        asset1.set('tags', ['t']);
        assets.add(asset1);

        const asset2 = new api.Asset(assets, { id: 2, type: 'material' });
        asset2.set('tags', ['t2', 't3']);
        assets.add(asset2);

        const asset3 = new api.Asset(assets, { id: 3, type: 'material' });
        asset3.set('tags', ['t3']);
        assets.add(asset3);

        expect(assets.listByTag(['t2', 't3'])).to.deep.equal([asset2]);
    });

    it('getAssetForScript returns asset', function () {
        const asset = new api.Asset(assets, {
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
});
