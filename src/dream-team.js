const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    }

    let name = '';
    members.forEach((element) => {
        if (typeof element == 'string' && element.length != 0) {
            name += element.trim().toUpperCase().charAt(0);
        }
    });

    return name.split('').sort().join('');
};