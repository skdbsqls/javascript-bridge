const INPUT_MESSAGE = Object.freeze({
  size: "다리의 길이를 입력해주세요.\n",
  move: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  command: "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
});

const OUTPUT_MESSAGE = Object.freeze({
  start: "다리 건너기 게임을 시작합니다.\n",
  end: "\n최종 게임 결과",
  success: (success) => `\n게임 성공 여부: ${success}`,
  count: (count) => `총 시도한 횟수: ${count}`,
});

const ERROR_MESSAGE = Object.freeze({
  onlyNumber: "[ERROR] 다리 길이는 숫자로 입력해 주세요.",
  invalidSize: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  invalidMove: "[ERROR] 이동할 칸은 U와 D 중 하나의 문자로 입력해 주세요.",
  invalidCommand: "[ERROR] 재시작 여부는 R과 Q 중 하나의 문자로 입력해 주세요.",
});

module.exports = { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
