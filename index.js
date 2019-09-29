module.exports = function(length) {
    var period = Math.pow(10, 2)
    , last = -1
    , repeat = 0
    , overflow = 0

    if (typeof length == 'undefined') length = 15

    return function() {
        var now = period * +new Date()

        if (now <= last) {
            repeat++
            if (repeat === period) {
                last += period
                overflow += period
                repeat = 0
            }
        } else {
            repeat = 0
            last = now
            overflow = 0
        }

        var s = (now + overflow + repeat).toString()
        return +s.substr(s.length - length)
    }
}
