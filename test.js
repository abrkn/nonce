var Nonce = require('./index')
, expect = require('expect.js');

describe('nonce', function() {
    it('doesnt duplicate', function() {
        var nonce = Nonce()
        , last = null;

        for (var i = 0; i < 1000; i++) {
            var now = nonce();
            expect(now).to.not.be(last);
            last = now;
        }
    })
})
