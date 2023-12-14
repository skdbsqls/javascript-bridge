const Validate = require("./validation/Validate");

class Size {
  #move;

  constructor(input) {
    this.#validate(input);
    this.#move = input;
  }

  #validate(input) {
    Validate.MoveValidate(input);
  }

  getMove() {
    return this.#move;
  }
}

module.exports = Size;
