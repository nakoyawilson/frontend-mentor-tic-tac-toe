import logo from "../assets/logo.svg";
import iconRestart from "../assets/icon-restart.svg";
import "./Gameboard.css";

const Gameboard = ({
  currentTurn,
  xScore,
  oScore,
  tiesScore,
  playRound,
  boardSpaces,
}) => {
  return (
    <section className="gameboard container">
      <div className="header">
        <img src={logo} alt="Tic-tac-toe XO logo" className="logo" />
        <h2 className="turn-indicator">
          {currentTurn % 2 === 1 ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.7785 2.64487L13.3551 0.22153C13.0598 -0.0738435 12.5809 -0.0738435 12.2855 0.22153L8 4.50702L3.71451 0.22153C3.41914 -0.0738435 2.94024 -0.0738435 2.64487 0.22153L0.22153 2.64487C-0.0738435 2.94024 -0.0738435 3.41914 0.22153 3.71451L4.50702 8L0.22153 12.2855C-0.0738435 12.5809 -0.0738435 13.0598 0.22153 13.3551L2.64487 15.7785C2.94024 16.0738 3.41914 16.0738 3.71451 15.7785L8 11.493L12.2855 15.7785C12.5809 16.0738 13.0598 16.0738 13.3551 15.7785L15.7785 13.3551C16.0738 13.0598 16.0738 12.5809 15.7785 12.2855L11.493 8L15.7785 3.71451C16.0738 3.41914 16.0738 2.94024 15.7785 2.64487Z"
                fill="#A8BFC9"
              />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10ZM5.92593 10C5.92593 7.74995 7.74995 5.92593 10 5.92593C12.25 5.92593 14.0741 7.74995 14.0741 10C14.0741 12.25 12.25 14.0741 10 14.0741C7.74995 14.0741 5.92593 12.25 5.92593 10Z"
                fill="#A8BFC9"
              />
            </svg>
          )}
          <span className="visually-hidden">
            {currentTurn % 2 === 1 ? "X's" : "O's"}
          </span>
          turn
        </h2>
        <button className="restart-btn">
          <span className="visually-hidden">Restart Game</span>
          <img src={iconRestart} alt="" className="restart-icon" />
        </button>
      </div>
      <div className="game-grid">
        {boardSpaces.map((space, idx) => {
          return (
            <button
              key={idx}
              type="button"
              className={`board-space ${
                space === "x" ? "x-space" : space === "o" ? "o-space" : ""
              }`}
              value={idx}
              onClick={playRound}
            ></button>
          );
        })}
      </div>
      <div className="score-wrapper">
        <div className="score player-x">
          <h3 className="score-heading">X (You)</h3>
          <span className="score-value">{xScore}</span>
        </div>
        <div className="score ties">
          <h3 className="score-heading">Ties</h3>
          <span className="score-value">{tiesScore}</span>
        </div>
        <div className="score player-o">
          <h3 className="score-heading">O (CPU)</h3>
          <span className="score-value">{oScore}</span>
        </div>
      </div>
    </section>
  );
};

export default Gameboard;
