const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");
const BridgeGame = require("../Model/BridgeGame");

class Controller {
  #bridgeGame;

  run() {
    this.startGame();
  }

  // 게임 시작
  startGame() {
    OutputView.printStart();
    this.#size = InputView.readBridgeSize(this.playGame());
  }

  // 다리 생성
  setBridge(size) {
    this.#bridgeGame = new BridgeGame();
  }
}

module.exports = Controller;
