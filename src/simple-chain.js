const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
  resultArr: [],
  result: "",
  getLength() {
    return this.resultArr.length;
  },
  addLink(value) {
    this.resultArr.push(value);
    return this;
  },
  removeLink(position) {
    try {
      if (
        typeof position !== "number" ||
        position - 1 > this.resultArr.length - 1 ||
        position < 1
      ) {
        this.resultArr = [];
        throw new Error("You can't remove incorrect link!");
      }
      this.resultArr.splice(position - 1, 1);
    } catch (e) {
      throw e;
    }

    return this;
  },
  reverseChain() {
    this.resultArr = this.resultArr.reverse();
    return this;
  },
  finishChain() {
    if (this.resultArr.length > 0) {
      this.result =
        "( " +
        this.resultArr
          .map((val) => {
            if (val === null) return "null";
            return val;
          })
          .join(" )~~( ") +
        " )";
    }
    this.resultArr.length = 0;
    return this.result;
  },
};

module.exports = {
  chainMaker,
};
