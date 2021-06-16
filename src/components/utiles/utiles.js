import React from "react";
import '../../styles/logo.scss';

const Logo = ({color, size}) => {
  return (
    <div className="logo-container">
      <span className="logo-text" style={{color: color, fontSize: size}} >E</span>
      <span className="logo-text" style={{color: color, fontSize: size}}>-</span>
      <span className="logo-text" style={{color: color, fontSize: size}}>
        KART
      </span>
    </div>
  );
};

export { Logo };
