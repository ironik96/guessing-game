import HintNumberButton from "./HintNumberButton";

export default function HintNumberButtonList({
  generateRandomNumber,
  checkAnswer,
}) {
  return [...Array(10).keys()].map((e) => (
    <HintNumberButton
      number={generateRandomNumber()}
      checkAnswer={checkAnswer}
      key={e}
    />
  ));
}
