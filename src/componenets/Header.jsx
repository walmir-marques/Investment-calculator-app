import React from "react";
import Logo from "../assets/investment-calculator-logo.png";

export const Header = () => {
  return (
    <header id="header">
      <h1>Calculadora de investimentos.</h1>
      <img src={Logo} alt="My app Logo" />
    </header>
  );
};
