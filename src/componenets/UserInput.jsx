import React from "react";

export const UserInput = ({ onChange, userInput }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Investimento Inicial</label>
          <input
            type="number"
            required
            onChange={(e) => onChange("initialInvestment", e.target.value)}
            value={userInput.initialInvestment}
          ></input>
        </p>
        <p>
          <label>Investimento Anual</label>
          <input
            type="number"
            required
            onChange={(e) => onChange("annualInvestment", e.target.value)}
            value={userInput.annualInvestment}
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Retorno Esperado</label>
          <input
            type="number"
            required
            onChange={(e) => onChange("expectedReturn", e.target.value)}
            value={userInput.expectedReturn}
          ></input>
        </p>
        <p>
          <label>Duração (Anos)</label>
          <input
            type="number"
            required
            onChange={(e) => onChange("duration", e.target.value)}
            value={userInput.duration}
          ></input>
        </p>
      </div>
    </section>
  );
};
