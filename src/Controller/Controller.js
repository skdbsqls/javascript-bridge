const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");
const { Console } = require("@woowacourse/mission-utils");

class Controller {
  #size;

  run() {
    this.gameStart();
  }

  // 게임 시작
  gameStart() {
    OutputView.printStart();
    this.#size = InputView.readBridgeSize();
  }

  // 출력
  //   #executePrint() {
  //     OutputView.printOutput();
  //     OutputView.printName(this.#name);
  //   }
}

module.exports = Controller;
