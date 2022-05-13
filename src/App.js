import Modal from "./components/Modal";
import Gameboard from "./components/Gameboard";
import logo from "./assets/logo.svg";
import iconX from "./assets/icon-x.svg";
import iconO from "./assets/icon-o.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [showNewGameModal, setShowNewGameModal] = useState(true);
  const [showRestartModal, setShowRestartModal] = useState(false);
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [playAgainstCPU, setPlayAgainstCPU] = useState(null);

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      {showNewGameModal && (
        <Modal>
          <img src={logo} alt="Tic-tac-toe XO logo" className="logo" />
          <form>
            <p>Pick player 1's mark</p>
            <input type="radio" name="playerIcon" id="iconX" />
            <label htmlFor="iconX">
              <img src={iconX} alt="" />
            </label>
            <input type="radio" name="playerIcon" id="iconO" />
            <label htmlFor="iconO">
              <img src={iconO} alt="" />
            </label>
            <p>Remember: X goes first</p>
          </form>
          <form>
            <input type="radio" name="" id="cpuPlayer" />
            <label htmlFor="cpuPlayer">New Game (vs CPU)</label>
            <input type="radio" name="" id="humanPlayer" />
            <label htmlFor="humanPlayer">New Game (vs player)</label>
          </form>
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
    </div>
  );
};

export default App;
