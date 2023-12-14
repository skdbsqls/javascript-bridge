const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE } = require("../constants/message");

const OutputView = {
  // 게임 시작 메시지 출력
  printStart() {
    Console.print(OUTPUT_MESSAGE.start);
  },
  // 다리 만들기
  printSide(sides) {
    const side = `[ ${sides.join(" | ")} ]`;
    Console.print(side);
  },
  // 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
  printMap(bridgeGame) {
    this.printSide(bridgeGame.getSide("U"));
    this.printSide(bridgeGame.getSide("D"));
  },

  // 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
  printResult(bridgeGame) {
    Console.print(OUTPUT_MESSAGE.end);
    this.printMap(bridgeGame);
    Console.print(OUTPUT_MESSAGE.success(bridgeGame.getResult().success));
    Console.print(OUTPUT_MESSAGE.count(bridgeGame.getCount()));
  },
};

module.exports = OutputView;
