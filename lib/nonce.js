module.exports = function(scale) {
    var last = null, repeat = 0;
    scale || (scale = 2);

    return function() {
        var now = +new Date;

        if (now == last) {
            repeat++;
        } else {
            repeat = 0;
            last = now;
        }

        return last * Math.pow(10, scale) + repeat;
    };
};