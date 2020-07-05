const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 0;
        if (Array.isArray(arr)) {
            arr.forEach((e) => {
                depth = Math.max(depth, this.calculateDepth(e));
            });
            return depth + 1;
        } else {
            return depth;
        }
    }
};