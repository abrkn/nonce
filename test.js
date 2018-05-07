var Nonce = require('./index')
, expect = require('expect.js');

Array.prototype.sub = function( b ) {
  var a = this,
    c = [];
  if( Object.prototype.toString.call( b ) === '[object Array]' ) {
    if( a.length !== b.length ) {
      throw new Error("Array lengths do not match.");
    } else {
      for( var i = 0; i < a.length; i++ ) {
        c[ i ] = a[ i ] - b[ i ];
      }
    }
  } else if( typeof b === 'number' ) {
    for( var i = 0; i < a.length; i++ ) {
      c[ i ] = a[ i ] + b;
    }
  }
  return c;
};

describe('nonce', function() {
  it('should not get any duplicate', async function() {
    let integersList = Array.from(Array(10).keys());
    let nonceList = integersList.map((aNumber) => Nonce()());
    // console.log(nonceList)
    let nonShiftedSubList = nonceList.slice(1);
    let shiftedForwardList = nonceList.slice(0,nonceList.length-1);

    let delta = nonShiftedSubList.sub(shiftedForwardList);
    delta.every((aDelta) => expect(aDelta).to.be.greaterThan(0));
  })
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
