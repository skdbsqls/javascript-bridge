/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/message.js";

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  async readBridgeSize() {
    const size = await Console.readLineAsync(INPUT_MESSAGE.size);
    return size;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  async readMoving() {
    const move = await Console.readLineAsync(INPUT_MESSAGE.move);
    return move;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  async readGameCommand() {
    const command = await Console.readLineAsync(INPUT_MESSAGE.command);
    return command;
  },
};

module.exports = InputView;
