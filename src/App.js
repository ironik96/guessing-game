import HintNumberButtonList from "components/HintNumberButtonList";
import { useState } from "react";
import "./App.css";

const ATTEMPTS = 5;

const generateRandomNumber = () => Math.floor(Math.random() * 101);
let magicNumber = generateRandomNumber();
let currentAttempts = ATTEMPTS;
console.log(magicNumber);

function App() {
  let userNumber = -1;
  const checkAnswer = (number) => {
    currentAttempts--;
    const hintText = document.querySelector("p.hint-text");

    if (number > magicNumber) hintText.innerText = "too high!";
    if (number < magicNumber) hintText.innerText = "too low!";
    if (number == magicNumber) {
      alert("correct!");
      window.location.reload();
    } else if (currentAttempts === 0) {
      alert("you lost");
      window.location.reload();
    }
  };

  const helpNumbers = () => (
    <HintNumberButtonList
      generateRandomNumber={generateRandomNumber}
      checkAnswer={checkAnswer}
    />
  );
  const [Wisdom, setWisdom] = useState(helpNumbers());
  const onClickSlay = () => checkAnswer(userNumber);
  const onClickSurrender = () => {
    window.location.reload();
  };
  const onClickSeekWisdom = () => {
    const helpSection = document.querySelector("div#help-section");
    if (helpSection.classList.contains("hide-help-section")) {
      helpSection.classList.remove("hide-help-section");
      helpSection.classList.add("show-help-section");
    }
    setWisdom(helpNumbers());
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Ancient</h1>
        <p>scary ancient monster appears!!</p>
        <p> find the number to slay it</p>
        <p className="hint-text"></p>
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
        <div className="hide-help-section" id="help-section">
          <p>try any of these</p>
          <div className="help-btn-group">{helpNumbers()}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
