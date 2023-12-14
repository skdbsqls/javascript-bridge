const Size = require("../util/Size");
const Move = require("../util/Move");
const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("../constants/message");

const InputView = {
  // 다리의 길이 입력
  readBridgeSize(setBridge) {
    Console.readLine(INPUT_MESSAGE.size, (input) => {
      try {
        const size = new Size(input).getSize();
        setBridge(size);
      } catch (error) {
        Console.print(error.message);
        return this.readBridgeSize(setBridge);
      }
    });
  },

  // 사용자가 이동할 칸을 입력받는다.
  readMoving(moveStep) {
    Console.readLine(INPUT_MESSAGE.move, (input) => {
      try {
        const move = new Move(input).getMove();
        moveStep(move);
      } catch (error) {
        Console.print(error.message);
        return this.readMoving(moveStep);
      }
    });
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
