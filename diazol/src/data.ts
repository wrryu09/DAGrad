export const questions: { [key: string]: QuestionDataType } = {
  type: {
    title: "내 스트레스 유형은?",
    content:
      "감당하기 힘든 일이 산더미같이 쌓여있을 때, 당신이라면? \n가장 가까운 선택지를 골라주세요",
    choice: 3,
  },
  Q1: {
    title: "01",
    content:
      "최근 1개월 동안 예상치 못했던 일 때문에 당황했던 적이 얼마나 있었습니까?",
    choice: 5,
  },
  Q2: {
    title: "02",
    content:
      "최근 1개월 동안, 인생에서 중요한 일들을 조절할 수 없다는 느낌을 얼마나 경험하였습니까?",
    choice: 5,
  },
  Q3: {
    title: "03",
    content:
      "최근 1개월 동안, 신경이 예민해지고 스트레스를 받고 있다는 느낌을 얼마나 경험하였습니까?",
    choice: 5,
  },
  Q4: {
    title: "04",
    content:
      "최근 1개월 동안, 당신의 개인적 문제들을 다루는 데 있어서 얼마나 자주 자신감을 느꼈습니까?",
    choice: 5,
  },
  Q5: {
    title: "05",
    content:
      "최근 1개월 동안, 일상의 일들이 당신의 생각대로 진행되고 있다는 느낌을 얼마나 경험하였습니까?",
    choice: 5,
  },
  Q6: {
    title: "06",
    content:
      "최근 1개월 동안, 당신이 꼭 해야 하는 일을 처리할 수 없다고 생각한 적이 얼마나 있었습니까?",
    choice: 5,
  },
  Q7: {
    title: "07",
    content:
      "최근 1개월 동안, 일상생활의 짜증을 얼마나 자주 잘 다스릴 수 있었습니까?",
    choice: 5,
  },
  Q8: {
    title: "08",
    content: "최근 1개월 동안, 최상의 컨디션이라고 얼마나 자주 느끼셨습니까?",
    choice: 5,
  },
  Q9: {
    title: "09",
    content:
      "최근 1개월 동안, 당신이 통제할 수 없는 일 때문에 화가 난 경험이 얼마나 있었습니까?",
    choice: 5,
  },
  Q10: {
    title: "10",
    content:
      "최근 1개월 동안, 어려운 일들이 너무 많이 쌓여서 극복하지 못할 것 같은 느낌을 얼마나 자주 경험하셨습니까?",
    choice: 5,
  },
};

export const fiveSelectionBtnContent = [
  { content: "매우 자주 있었다", num: 4 },
  { content: "자주 있었다", num: 3 },
  { content: "때때로 있었다", num: 2 },
  { content: "거의 없었다", num: 1 },
  { content: "전혀 없었다", num: 0 },
];
export const typeSelectionBtnContent = [
  { content: "기한까지 못 끝낼까 불안하다", num: 1 },
  { content: "꼭 완벽하게 끝내고야 만다!", num: 2 },
  { content: "감당하기 힘들어 숨어버리고 싶다", num: 3 },
];
