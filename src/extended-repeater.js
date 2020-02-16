module.exports = function repeater(str, options) {
    //    repeatTimes
    //    separator
    //    addition
    //    additionRepeatTimes
    //    additionSeparator

    return add(str + add(options.addition === undefined ? '' : options.addition, options.additionRepeatTimes, options.additionSeparator == null || options.additionSeparator == undefined ? '|' : options.additionSeparator), options.repeatTimes, options.separator == null || options.separator == undefined ? '+' : options.separator)
};

function add(str, times, separ) {
    let res = str;
    for (let i = 0; i < times - 1; i++) {
        res += separ + str;
    }
    return res;
}
