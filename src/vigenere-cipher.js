const CustomError = require("../extensions/custom-error");

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
class VigenereCipheringMachine {
    type = true;
    constructor(type) {
        if (type === false) {
            this.type = false;
        }
    }
    encrypt(message, key) {
        return this.processMessage(message.toUpperCase(), key.toUpperCase());
    }
    decrypt(message, key) {
        return this.processMessage(message.toUpperCase(), key.toUpperCase(), 'decrypt')
    }

    processMessage(message, key, mode) {
        let keyIndex = 0;
        let result = '';
        for (let i = 0; i < message.length; i++) {
            var messageItem = alphabet.indexOf(message[i]);
            if (messageItem !== -1) {
                var keyItem = alphabet.indexOf(key[keyIndex]);

                keyItem = (typeof mode !== 'undefined' && mode.indexOf('decrypt') !== -1 ? -keyItem : keyItem);
                let cymbol = alphabet[((alphabet.length + (messageItem + keyItem)) % alphabet.length)];

                result += cymbol;
                keyIndex = (keyIndex + 1) % key.length;
            } else {
                result += message[(i >= message.length ? i % message.length : i)];
            }
        }
        return this.type ? result : result.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;