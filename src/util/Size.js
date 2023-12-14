const Validate = require("./validation/Validate");

class Size {
  #size;

  constructor(input) {
    this.#validate(input);
    this.#size = input;
  }

  #validate(input) {
    Validate.SizeValidate(input);
  }

  getSize() {
    return Number(this.#size);
  }
}

module.exports = Size;
