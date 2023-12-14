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
    InputView.readBridgeSize(this.setBridge.bind(this));
  }

  // 게임 생성
  setBridge(size) {
    this.#bridgeGame = new BridgeGame(size);
    this.playGame();
  }

  // 게임 진행
  playGame() {
    InputView.readMoving(this.moveStep.bind(this));
  }

  moveStep(move) {
    const result = this.#bridgeGame.move(move);

    OutputView.printMap(this.#bridgeGame);
    this.nextStep(result);
  }

  nextStep(result) {
    if (result.status === true && result.success === false) {
      this.playGame();
    }
    if (result.status === false && result.success === false) {
      // 재시작 여부
    }
    if (result.status === false && result.success === false) {
      // 종료
    }
  }

  // 게임 재시작
  reStartGame() {}
}

module.exports = Controller;
