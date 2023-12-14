const BridgeMaker = require("../util/BridgeMaker");
const BridgeRandomNumberGenerator = require("../util/BridgeRandomNumberGenerator");

// 다리 건너기 게임을 관리하는 클래스
class BridgeGame {
  #bridge;
  #step;
  #upSide;
  #downSide;
  #result;
  #success;
  #count;

  constructor(size) {
    this.#bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.#step = 0;
    this.#upSide = [];
    this.#downSide = [];
    this.#result = Boolean;
    this.#success = Boolean;
    this.#count = 1;
  }
  // 사용자가 칸을 이동할 때 사용하는 메서드
  move(move) {
    this.#step += 1;
    if (move === "U") {
      return this.moveUpSide();
    }
    if (move === "D") {
      return this.moveDownSide();
    }
  }

  // 정답이 위인 경우
  moveUpSide() {
    if (this.#bridge[this.#step - 1] === "U") {
      this.#upSide.push(" O");
      this.#result = true;
      return this.successGame();
    } else {
      this.#downSide.push(" X");
      this.#result = false;
    }
  }

  // 정답이 아래인 경우
  moveDownSide() {
    if (this.#bridge[this.#step - 1] === "D") {
      this.#downSide.push(" O");
      this.#result = true;
      return this.successGame();
    } else {
      this.#upSide.push(" X");
      this.#result = false;
      return this.successGame();
    }
  }

  // 게임 종료 여부
  successGame() {
    if (this.#bridge.length === this.#step) {
      this.#result === true ? (this.#success = true) : (this.#success = false);
    } else this.#success = false;
  }

  // side 구하기
  getUpSide() {
    return this.#upSide;
  }
  getDownSide() {
    return this.#downSide;
  }

  // 성공 여부 구하기
  getSuccess() {
    return this.#success;
  }

  // 사용자가 게임을 다시 시도할 때 사용하는 메서드
  retry() {
    this.#step = 0;
    this.#count += 1;
    this.#upSide = [];
    this.#downSide = [];
  }

  // 시도 횟수 구하기
  getCount() {
    return this.#count;
  }
}

module.exports = BridgeGame;
