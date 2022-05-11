import "./App.css";
import HintNumberButton from "./components/HintNumberButton";

const generateMagicNumber = () => Math.floor(Math.random() * 101);
let magicNumber = generateMagicNumber();
console.log(magicNumber);

function App() {
  let userNumber = -1;
  const onClickSlay = () => checkAnswer(userNumber);
  const onClickSurrender = () => {
    window.location.reload();
  };
  const onClickSeekWisdom = () => {};

  const checkAnswer = (number) => {
    console.log("user: " + number);
    if (number == magicNumber) alert("correct!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Ancient</h1>
        <p>scary ancient monster appears!!</p>
        <p> find the number to slay it</p>
        <input
          onChange={(event) => (userNumber = event.target.value)}
          type="number"
          className="num-input"
          placeholder="1-100"
        ></input>
        <button className="main-btn" onClick={onClickSlay}>
          Slay
        </button>
        <div className="btn-group">
          <button className="secondary-btn" onClick={onClickSurrender}>
            Surrender
          </button>
          <button className="secondary-btn" onClick={onClickSeekWisdom}>
            Seek Wisdom
          </button>
        </div>
        <div className="help-section">
          <p>try any of these</p>
          <div className="help-btn-group">
            <HintNumberButton
              number={generateMagicNumber()}
              checkAnswer={checkAnswer}
            />
            <HintNumberButton
              number={generateMagicNumber()}
              checkAnswer={checkAnswer}
            />
            <HintNumberButton
              number={generateMagicNumber()}
              checkAnswer={checkAnswer}
            />
            <HintNumberButton
              number={generateMagicNumber()}
              checkAnswer={checkAnswer}
            />
            <HintNumberButton
              number={generateMagicNumber()}
              checkAnswer={checkAnswer}
            />
            <HintNumberButton
              number={generateMagicNumber()}
              checkAnswer={checkAnswer}
            />
            <HintNumberButton
              number={generateMagicNumber()}
              checkAnswer={checkAnswer}
            />
            <HintNumberButton
              number={generateMagicNumber()}
              checkAnswer={checkAnswer}
            />
            <HintNumberButton
              number={generateMagicNumber()}
              checkAnswer={checkAnswer}
            />
            <HintNumberButton
              number={generateMagicNumber()}
              checkAnswer={checkAnswer}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
