const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (!date) {
        return 'Unable to determine the time of year!';
    }

    date.valueOf();

    var winter = [11, 0, 1];
    var sping = [2, 3, 4];
    var summer = [5, 6, 7];
    var autumn = [8, 9, 10];

    if (winter.includes(date.getMonth())) {
        return 'winter';
    } else if (sping.includes(date.getMonth())) {
        return 'spring';
    } else if (summer.includes(date.getMonth())) {
        return 'summer';
    } else if (autumn.includes(date.getMonth())) {
        return 'autumn';
    }
};