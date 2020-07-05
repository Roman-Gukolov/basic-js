const CustomError = require("../extensions/custom-error");

const DEFAULT_SEPARATOR = '+';
const DEFAULT_ADDITION_SEPARATOR = '|';
module.exports = function repeater(str, options) {
    if (!options) {
        return str;
    }

    if (options.addition !== undefined || typeof options.addition == 'boolean') {
        let addition = String(options.addition);

        if (options.additionRepeatTimes && options.additionRepeatTimes > 0) {
            let additionSeparator = options.additionSeparator && options.additionRepeatTimes > 1 ? options.additionSeparator : DEFAULT_ADDITION_SEPARATOR;

            for (let i = 1; i < options.additionRepeatTimes; i++) {
                str += addition + additionSeparator;
            }
        }
        str += addition;
    }

    let result = '';
    if (options.repeatTimes && options.repeatTimes > 0) {
        let separator = options.separator ? options.separator : DEFAULT_SEPARATOR;
        for (let i = 1; i < options.repeatTimes; i++) {
            result += str + separator;
        }
        result += str;
    }
    if (!options.repeatTimes && options.addition) {
        return str;
    }
    return result;

};