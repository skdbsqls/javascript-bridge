/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/message.js";

const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap() {},

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},

  printStart() {
    Console.print(OUTPUT_MESSAGE.start);
  },
  printEnd() {
    Console.print(OUTPUT_MESSAGE.end);
  },
  printSuccess(success) {
    Console.print(OUTPUT_MESSAGE.success(success));
  },
  printTry(n) {
    Console.print(OUTPUT_MESSAGE.try(n));
  },
};

module.exports = OutputView;
