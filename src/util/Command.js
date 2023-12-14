const Validate = require("./validation/Validate");

class Command {
  #command;

  constructor(input) {
    this.#validate(input);
    this.#command = input;
  }

  #validate(input) {
    Validate.CommandValidate(input);
  }

  getCommand() {
    return this.#command;
  }
}

module.exports = Command;
