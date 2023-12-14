const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");

class Controller {
  #size;

  #move;

  run() {
    this.startGame();
  }

  // 게임 시작
  startGame() {
    OutputView.printStart();
    this.#size = InputView.readBridgeSize(this.playGame());
  }

  // 게임 진행
  playGame() {
    this.#move = InputView.readMoving();
  }
}

module.exports = Controller;
