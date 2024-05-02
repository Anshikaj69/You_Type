import { useRef } from "react";
import refresh from '../assets/refresh.png'

const RestartButton = ({ onRestart: handleRestart, className = "" }) => {
  const buttonRef = useRef(null);

  const handleClick = () => {
    buttonRef.current?.blur();
    handleRestart();
  };

  return (
    <button
      tabIndex={-1} // to prevent focus
      ref={buttonRef}
      className={`block rounded px-8 py-2 hover:bg-slate-700/50 ${className}`}
      onClick={handleClick}
    >
      <img src={refresh}  className="w-6 h-6" />
    </button>
  );
};

export default RestartButton;
