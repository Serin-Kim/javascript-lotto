const LOTTERY_PRICE = 1000;

const MESSAGE = {
  GET_MONEY: "구입금액을 입력해 주세요.\n",
  GET_WINNING_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
  BOUGHT_LOTTERY: "개를 구매했습니다.",
  GET_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
};

const LOTTERY_RESULT = {
  MATCHED_SIX: "6개 일치 (2,000,000,000원)  - ",
  MATCHED_FIVE_AND_BONUS: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  MATCHED_FIVE: "5개 일치 (1,500,000원) - ",
  MATCHED_FOUR: "4개 일치 (50,000원) - ",
  MATCHED_THREE: "3개 일치 (5,000원) - ",
};

const PRIZE = {
  FIRST_PLACE: 0,
  SECOND_PLACE: 1,
  THIRD_PLACE: 2,
  FOURTH_PLACE: 3,
  FIFTH_PLACE: 4,
};

module.exports = { MESSAGE, LOTTERY_PRICE, LOTTERY_RESULT, PRIZE };
