module.exports = function(scale) {
    var last = null
    , repeat = 0

    if (typeof scale == 'undefined') scale = 2

    return function() {
        var now = Math.round(+new Date() * Math.pow(10, scale))

        if (now == last) {
            repeat++
        } else {
            repeat = 0
            last = now
        }

        return now + repeat
    }
}
