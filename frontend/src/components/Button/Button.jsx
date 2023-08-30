import React from 'react';

const Button = ({ name, icon, onClick, bg, bPad, color, bRad }) => {
  return (
    <button
      className={`outline-none border-none font-nunito font-semibold flex items-center gap-2 cursor-pointer transition-all duration-400 ease-in-out shadow-sm hover:bg-[#78D1E2]
    ${bg} ${bPad} ${color} ${bRad}`}
      onClick={onClick}>
      {icon}
      {name}
    </button>
  );
};

export default Button;
