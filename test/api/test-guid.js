describe('guid tests', function () {
    it('creates valid guid', function () {
        const guid = api.Guid.create();
        expect(guid).to.be.a('string');
        expect(guid.length).to.equal(36);
        expect(/^[a-z0-9]{8}-[a-z0-9]{4}-4[a-z0-9]{3}-[a-z0-9]{4}-[a-z0-9]{12}$/.test(guid)).to.equal(true);
    });
});
