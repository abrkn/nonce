module.exports = function(scale) {
    var last = null
    , repeat = 0

    if (typeof scale == 'undefined') scale = 2

    return function() {
        var now = +new Date()

        if (now == last) {
            repeat++
        } else {
            repeat = 0
            last = now
        }

        return Math.round(last * Math.pow(10, scale)) + repeat
    }
}
