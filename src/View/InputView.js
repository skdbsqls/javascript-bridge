const Size = require("../Model/Size");
const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("../constants/message");

const InputView = {
  // 다리의 길이 입력
  readBridgeSize() {
    Console.readLine(INPUT_MESSAGE.size, (input) => {
      try {
        return new Size(input).getSize();
      } catch (error) {
        Console.print(error.message);
        return this.readBridgeSize();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    const move = Console.readLine(INPUT_MESSAGE.move);
    return move;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    const command = Console.readLine(INPUT_MESSAGE.command);
    return command;
  },
};

module.exports = InputView;
