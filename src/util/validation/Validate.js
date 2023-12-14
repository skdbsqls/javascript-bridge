import { ERROR_MESSAGE } from "../../constants/message.js";

const Validate = {
  SizeValidate(input) {
    Check.checkNumber(input);
    Check, checkSize(input);
  },
  MoveValidate(input) {
    Check.checkMove(input);
  },
  CommandValidate(input) {
    Check.checkCommand(input);
  },
};

const Check = {
  checkNumber(input) {
    if (isNaN(input)) {
      throw new Error(ERROR_MESSAGE.onlyNumber);
    }
  },
  checkSize(input) {
    if (input < 3 || input > 20) {
      throw new Error(ERROR_MESSAGE.invalidSize);
    }
  },
  checkMove(input) {
    if (input !== "U" && input !== "D") {
      throw new Error(ERROR_MESSAGE.invalidMove);
    }
  },
  checkCommand(input) {
    if (input !== "R" && input !== "Q") {
      throw new Error(ERROR_MESSAGE.invalidCommand);
    }
  },
};

export default Validate;
