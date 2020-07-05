const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        if (value == null) {
            this.chain.push('null');
        } else {
            this.chain.push(value);
        }
        return this;
    },
    removeLink(position) {
        if (position - 1 < 0) {
            this.chain.splice(0, this.chain.length);
            throw Error();
        }
        this.chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        const result = '( ' + this.chain.join(' )~~( ') + ' )';
        this.chain.splice(0, this.chain.length);
        return result;
    }
};

module.exports = chainMaker;