const CustomError = require("../extensions/custom-error");

const DISCARD_NEXT = '--discard-next';
const DISCARD_PREV = '--discard-prev';
const DOUBLE_NEXT = '--double-next';
const DOUBLE_PREV = '--double-prev';
module.exports = function transform(arr) {
    const array = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === DISCARD_NEXT) {
            i++;
        } else if (arr[i] === DISCARD_PREV) {
            if (arr[i - 2] !== DISCARD_NEXT) {
                array.pop();
            }
        } else if (arr[i] === DOUBLE_PREV) {
            if (i - 1 >= 0 && arr[i - 2] !== DISCARD_NEXT) {
                array.push(arr[i - 1]);
            }
        } else if (arr[i] === DOUBLE_NEXT) {
            if (i + 1 < arr.length) {
                array.push(arr[i + 1]);
            }
        } else {
            array.push(arr[i]);
        }
    }

    return array;
}