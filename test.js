var Nonce = require('./index')
, expect = require('expect.js');

describe('nonce', function() {
    it('doesnt repeat the previous nonce', function() {
        var nonce = Nonce()
        , last = null;

        for (var i = 0; i < 1000; i++) {
            var now = nonce();
            expect(now).to.not.be(last);
            last = now;
        }
    })
    it('does not output duplicate nonces', function() {
        var nonce = Nonce()
        , emitted = {};

        for (var i = 0; i < 9999; i++) {
            var now = nonce();
            if (emitted[now]) throw new Error('duplicate!');
            emitted[now] = true;
        }
    })
})
