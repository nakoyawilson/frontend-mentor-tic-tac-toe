import logo from "../assets/logo.svg";
import iconRestart from "../assets/icon-restart.svg";

const Gameboard = () => {
  return (
    <>
      <img src={logo} alt="Tic-tac-toe XO logo" className="logo" />
      <span>{/* <!-- x/o icon -->  */}turn</span>
      <button>
        <span className="visually-hidden">Restart Game</span>
        <img src={iconRestart} alt="" />
      </button>
      <span>X (You)</span>
      <span>{/* <!-- Your score --> */}</span>
      <span>Ties</span>
      <span>{/* <!-- Ties score --> */}</span>
      <span>X (CPU)</span>
      <span>{/* <!-- CPU score --> */}</span>
    </>
  );
};

export default Gameboard;
