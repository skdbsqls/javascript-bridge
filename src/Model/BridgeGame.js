const BridgeMaker = require("../util/BridgeMaker");
const BridgeRandomNumberGenerator = require("../util/BridgeRandomNumberGenerator");

// 다리 건너기 게임을 관리하는 클래스
class BridgeGame {
  #bridge;
  #step;
  #upSide;
  #downSide;
  #result;
  #count;

  constructor(size) {
    this.#bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.#step = 0;
    this.#upSide = [];
    this.#downSide = [];
    this.#result = { status: false, success: "실패" };
    this.#count = 1;
  }
  // 사용자가 칸을 이동할 때 사용하는 메서드
  move(move) {
    this.#step += 1;
    if (move === "U") {
      this.#downSide.push(" ");
      return this.moveUpSide();
    }
    if (move === "D") {
      this.#upSide.push(" ");
      return this.moveDownSide();
    }
  }

  // 정답이 위인 경우
  moveUpSide() {
    if (this.#bridge[this.#step - 1] === "U") {
      this.#upSide.push("O");
      return this.successGame();
    } else {
      this.#upSide.push("X");
      this.#result.status = false;
      this.#result.success = "실패";
      return this.#result;
    }
  }

  // 정답이 아래인 경우
  moveDownSide() {
    if (this.#bridge[this.#step - 1] === "D") {
      this.#downSide.push("O");
      return this.successGame();
    } else {
      this.#downSide.push("X");
      this.#result.status = false;
      this.#result.success = "실패";
      return this.#result;
    }
  }

  // 게임 종료 여부
  successGame() {
    if (this.#bridge.length === this.#step) {
      this.#result.status = true;
      this.#result.success = "성공";
      return this.#result;
    } else {
      this.#result.status = true;
      this.#result.success = "실패";
      return this.#result;
    }
  }

  // side 구하기
  getSide(side) {
    if (side === "U") {
      return this.#upSide;
    }
    if (side === "D") {
      return this.#downSide;
    }
  }

  // 게임 결과 구하기
  getResult() {
    return this.#result;
  }

  // 사용자가 게임을 다시 시도할 때 사용하는 메서드
  retry(playGame) {
    this.#step = 0;
    this.#count += 1;
    this.#upSide = [];
    this.#downSide = [];
    playGame();
  }

  // 시도 횟수 구하기
  getCount() {
    return this.#count;
  }
}

module.exports = BridgeGame;
