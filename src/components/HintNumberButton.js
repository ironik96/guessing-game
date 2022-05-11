function HintNumberButton({ number, checkAnswer }) {
  return (
    <button className="hint-btn" onClick={() => checkAnswer(number)}>
      {number}
    </button>
  );
}

export default HintNumberButton;
