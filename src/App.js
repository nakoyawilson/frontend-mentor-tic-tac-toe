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

  return (
    <>
      <h1 className="visually-hidden">Tic Tac Toe</h1>
      {showNewGameModal && (
        <Modal>
          <div className="new-game container">
            <img src={logo} alt="Tic-tac-toe XO logo" className="logo" />
            <form className="icon-settings">
              <h2 className="heading">Pick player 1's mark</h2>
              <div className="icons-wrapper">
                <input
                  type="radio"
                  name="playerIcon"
                  id="iconX"
                  className="visually-hidden icon-option"
                />
                <label htmlFor="iconX" className="icon-label">
                  <span className="visually-hidden">X icon</span>
                  <svg
                    width="64"
                    height="64"
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon-wrapper"
                  >
                    <path
                      d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
                      fillRule="evenodd"
                      className="icon"
                    />
                  </svg>
                </label>
                <input
                  type="radio"
                  name="playerIcon"
                  id="iconO"
                  className="visually-hidden icon-option"
                  defaultChecked
                />
                <label htmlFor="iconO" className="icon-label">
                  <span className="visually-hidden">O icon</span>
                  <svg
                    width="64"
                    height="64"
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon-wrapper"
                  >
                    <path
                      d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
                      className="icon"
                    />
                  </svg>
                </label>
              </div>
              <p class="paragraph">Remember: X goes first</p>
            </form>
            <form>
              <input
                type="radio"
                name=""
                id="cpuPlayer"
                className="visually-hidden"
              />
              <label htmlFor="cpuPlayer" className="new-game-btn new-game-cpu">
                New Game (vs CPU)
              </label>
              <input
                type="radio"
                name=""
                id="humanPlayer"
                className="visually-hidden"
              />
              <label
                htmlFor="humanPlayer"
                className="new-game-btn new-game-human"
              >
                New Game (vs player)
              </label>
            </form>
          </div>
        </Modal>
      )}
      <Gameboard />
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
