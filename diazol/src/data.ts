import { QuestionDataType } from "./types";

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
      "최근 1개월 동안,\n예상치 못했던 일 때문에 당황했던 적이 얼마나 있었습니까?",
    choice: 5,
  },
  Q2: {
    title: "02",
    content:
      "최근 1개월 동안, \n인생에서 중요한 일들을 조절할 수 없다는 느낌을 얼마나 경험하였습니까?",
    choice: 5,
  },
  Q3: {
    title: "03",
    content:
      "최근 1개월 동안, \n신경이 예민해지고 스트레스를 받고 있다는 \n느낌을 얼마나 경험하였습니까?",
    choice: 5,
  },
  Q4: {
    title: "04",
    content:
      "최근 1개월 동안, \n당신의 개인적 문제들을 다루는 데 있어서 \n얼마나 자주 자신감을 느꼈습니까?",
    choice: 5,
  },
  Q5: {
    title: "05",
    content:
      "최근 1개월 동안, \n일상의 일들이 당신의 생각대로 \n진행되고 있다는 느낌을 얼마나 경험하였습니까?",
    choice: 5,
  },
  Q6: {
    title: "06",
    content:
      "최근 1개월 동안, \n당신이 꼭 해야 하는 일을 처리할 수 없다고 \n생각한 적이 얼마나 있었습니까?",
    choice: 5,
  },
  Q7: {
    title: "07",
    content:
      "최근 1개월 동안, \n일상생활의 짜증을 얼마나 자주 잘 다스릴 수 있었습니까?",
    choice: 5,
  },
  Q8: {
    title: "08",
    content: "최근 1개월 동안, \n최상의 컨디션이라고 얼마나 자주 느끼셨습니까?",
    choice: 5,
  },
  Q9: {
    title: "09",
    content:
      "최근 1개월 동안, \n당신이 통제할 수 없는 일 때문에 화가 난 \n경험이 얼마나 있었습니까?",
    choice: 5,
  },
  Q10: {
    title: "10",
    content:
      "최근 1개월 동안, \n어려운 일들이 너무 많이 쌓여서 극복하지 \n못할 것 같은 느낌을 얼마나 자주 경험하셨습니까?",
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
  { content: "꼭 완벽하게 해내야만 한다", num: 2 },
  { content: "감당하기 힘들어 숨어버리고 싶다", num: 3 },
];
export const stressInfo = [
  {
    title: "혹시 나도 스트레스 잘 받는 성격?",
    content:
      "정도의 차이는 있으나 대부분의 사람들이 스트레스와 일생을 함께 합니다. 그러나 모든 사람들이 똑같은 내용으로 스트레스를 경험하지는 않습니다. 여러가지 요인이 있을 수 있으나 그중에서도 어떠한 성격유형을 가졌느냐에 따라 스트레스를 받아들이고 대처하는데 차이를 보입니다. 다시 말해서, 스트레스를 잘 받는 유형이 있다는 것입니다. \n\n이러한 성격유형은 생각이나 행동에 영향을 주어, 심리적으로 항상 긴장하거나 불안해하며, 쉽게 흥분하고, 적대감을 갖게 되는 경우가 많습니다. 그 결과, 특정 상황을 받아들이거나 그에 대처하는 방법에까지 부정적인 영향을 끼쳐 스트레스 상황을 악화시킵니다.",
  },
  {
    title: "스트레스를 유발하는 원인을 조절하는 방법",
    content:
      "문제해결 : 스트레스가 되는 문제의 근본적인 원인의 해결\n기간관리 : 촉박한 시간으로 인한 압박감에서 벗어남\n영양관리 : 과식을 피하고 수분과 영양을 적절히 취함\n인지된 자극을 피하는 것 : 스트레스가 유발되는 상황을 피함",
  },
];
