const Validate = require("../util/validation/Validate");

class Size {
  #size;

  constructor(input) {
    this.#validate(input);
    this.#size = input;
  }

  // 예외 처리
  #validate(input) {
    Validate.SizeValidate(input);
  }

  getSize() {
    return this.#size;
  }
}

module.exports = Size;
