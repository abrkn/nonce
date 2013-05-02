var Nonce = require('./index')
, expect = require('expect.js');

describe('nonce', function() {
    it('returns a number from date', function() {
        var nonce = Nonce()
        , current = nonce()
        , diff = +new Date * 100 - current;

        expect(Math.abs(diff)).to.be.lessThan(1000);
    });

    it('allows different scales', function() {
        var nonce = Nonce(3)
        , current = nonce()
        , diff = +new Date * 1000 - current;

        expect(Math.abs(diff)).to.be.lessThan(1000);
    });

    it('doesnt duplicate', function() {
        var nonce = Nonce(3)
        , last = null;

        for (var i = 0; i < 1000; i++) {
            var now = nonce();
            expect(now).to.not.be(last);
            last = now;
        }
    });

    it('allows zero scale', function() {
        var nonce = Nonce(0)
        , n = nonce()
        expect(n).to.be.a('number')
    })

    it('allows negative scale', function() {
        var nonce = Nonce(-5)
        , n = nonce()
        expect(n).to.be.a('number')
        expect(n % 1).to.be(0)
    })
})
