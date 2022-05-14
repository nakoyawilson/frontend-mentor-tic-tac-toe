import Modal from "./components/Modal";
import Gameboard from "./components/Gameboard";
import logo from "./assets/logo.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [showNewGameModal, setShowNewGameModal] = useState(true);
  const [showRestartModal, setShowRestartModal] = useState(false);
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [playAgainstCPU, setPlayAgainstCPU] = useState(null);
  const [currentTurn, setCurrentTurn] = useState(0);
  const [xScore, setXScore] = useState(1);
  const [oScore, setOScore] = useState(0);
  const [tiesScore, setTiesScore] = useState(0);
  const [boardSpaces, setBoardSpaces] = useState([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);

  const startGame = (e) => {
    if (e.target.value === "cpu") {
      setPlayAgainstCPU(true);
    } else if (e.target.value === "human") {
      setPlayAgainstCPU(false);
    }
    setShowNewGameModal(false);
  };

  const determineWinner = (moves) => {
    if (
      (moves[0] === "x" && moves[1] === "x" && moves[2] === "x") ||
      (moves[3] === "x" && moves[4] === "x" && moves[5] === "x") ||
      (moves[6] === "x" && moves[7] === "x" && moves[8] === "x") ||
      (moves[0] === "x" && moves[4] === "x" && moves[8] === "x") ||
      (moves[2] === "x" && moves[4] === "x" && moves[6] === "x") ||
      (moves[0] === "x" && moves[3] === "x" && moves[6] === "x") ||
      (moves[1] === "x" && moves[4] === "x" && moves[7] === "x") ||
      (moves[2] === "x" && moves[5] === "x" && moves[8] === "x")
    ) {
      setXScore((prevXScore) => (prevXScore += 1));
    } else if (
      (moves[0] === "o" && moves[1] === "o" && moves[2] === "o") ||
      (moves[3] === "o" && moves[4] === "o" && moves[5] === "o") ||
      (moves[6] === "o" && moves[7] === "o" && moves[8] === "o") ||
      (moves[0] === "o" && moves[4] === "o" && moves[8] === "o") ||
      (moves[2] === "o" && moves[4] === "o" && moves[6] === "o") ||
      (moves[0] === "o" && moves[3] === "o" && moves[6] === "o") ||
      (moves[1] === "o" && moves[4] === "o" && moves[7] === "o") ||
      (moves[2] === "o" && moves[5] === "o" && moves[8] === "o")
    ) {
      setOScore((prevOScore) => (prevOScore += 1));
    } else if (
      moves[0] &&
      moves[1] &&
      moves[2] &&
      moves[3] &&
      moves[4] &&
      moves[5] &&
      moves[6] &&
      moves[7] &&
      moves[8]
    ) {
      setTiesScore((prevTiesScore) => (prevTiesScore += 1));
    }
  };

  const playRound = (e) => {
    e.target.disabled = true;
    const spaceIndex = e.target.value;
    const spaces = [...boardSpaces];
    if (currentTurn % 2 === 1) {
      spaces[spaceIndex] = "x";
    } else {
      spaces[spaceIndex] = "o";
    }
    setCurrentTurn((prevCurrentTurn) => prevCurrentTurn + 1);
    determineWinner(spaces);
    setBoardSpaces(spaces);
  };

  return (
    <>
      <h1 className="visually-hidden">Tic Tac Toe</h1>
      {showNewGameModal && (
        <Modal>
          <div className="new-game container">
            <img src={logo} alt="Tic-tac-toe XO logo" className="logo" />
            <form className="icon-settings">
              <h2 className="heading">Pick player 1&rsquo;s mark</h2>
              <div className="icons-wrapper">
                <input
                  type="radio"
                  name="playerIcon"
                  id="iconX"
                  className="visually-hidden icon-option"
                  defaultChecked
                />
                <label htmlFor="iconX" className="icon-label">
                  <span className="visually-hidden">X icon</span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31.5569 5.28973L26.7103 0.443061C26.1195 -0.147687 25.1617 -0.147687 24.571 0.443061L16 9.01404L7.42902 0.443061C6.83827 -0.147687 5.88048 -0.147687 5.28973 0.443061L0.443061 5.28973C-0.147687 5.88048 -0.147687 6.83827 0.443061 7.42902L9.01404 16L0.443061 24.571C-0.147687 25.1617 -0.147687 26.1195 0.443061 26.7103L5.28973 31.5569C5.88048 32.1477 6.83827 32.1477 7.42902 31.5569L16 22.986L24.571 31.5569C25.1617 32.1477 26.1195 32.1477 26.7103 31.5569L31.5569 26.7103C32.1477 26.1195 32.1477 25.1617 31.5569 24.571L22.986 16L31.5569 7.42902C32.1477 6.83827 32.1477 5.88048 31.5569 5.28973Z"
                      className="icon"
                    />
                  </svg>
                </label>
                <input
                  type="radio"
                  name="playerIcon"
                  id="iconO"
                  className="visually-hidden icon-option"
                />
                <label htmlFor="iconO" className="icon-label">
                  <span className="visually-hidden">O icon</span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31.7412 15.8706C31.7412 7.10551 24.6357 0 15.8706 0C7.10551 0 0 7.10551 0 15.8706C0 24.6357 7.10551 31.7412 15.8706 31.7412C24.6357 31.7412 31.7412 24.6357 31.7412 15.8706ZM9.4048 15.8706C9.4048 12.2996 12.2996 9.4048 15.8706 9.4048C19.4416 9.4048 22.3364 12.2996 22.3364 15.8706C22.3364 19.4416 19.4416 22.3364 15.8706 22.3364C12.2996 22.3364 9.4048 19.4416 9.4048 15.8706Z"
                      className="icon"
                    />
                  </svg>
                </label>
              </div>
              <p className="paragraph">Remember: X goes first</p>
            </form>
            <button
              className="new-game-btn new-game-cpu"
              type="button"
              value="cpu"
              onClick={startGame}
            >
              New Game (vs CPU)
            </button>
            <button
              htmlFor="humanPlayer"
              className="new-game-btn new-game-human"
              type="button"
              value="human"
              onClick={startGame}
            >
              New Game (vs player)
            </button>
          </div>
        </Modal>
      )}
      <Gameboard
        currentTurn={currentTurn}
        xScore={xScore}
        oScore={oScore}
        tiesScore={tiesScore}
        playRound={playRound}
        boardSpaces={boardSpaces}
      />
      {showRestartModal && (
        <Modal>
          <h2>Restart game?</h2>
          <button>No, cancel</button>
          <button>Yes, restart</button>
        </Modal>
      )}
      {showResultsModal && (
        <Modal>
          {playAgainstCPU && <h2>Oh no, you lost You won! Round tied</h2>}
          {!playAgainstCPU && <h2> Player {/* <!-- 1/2 --> */} wins!</h2>}
          <p>{/* <!-- x/o icon --> */} takes the round</p>
          <button>Quit</button>
          <button>Next round</button>
        </Modal>
      )}
    </>
  );
};

export default App;
