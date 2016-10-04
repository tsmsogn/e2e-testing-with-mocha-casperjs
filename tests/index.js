describe('Home', function() {
    before(function() {
        casper.start('http://tsmsogn.github.io/')
    })

    it('should have title', function() {
        casper.then(function() {
            'u.find.any?'.should.matchTitle
        })
    })
})
