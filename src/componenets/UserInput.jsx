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
            onChange={(e) =>
              onChange("initialInvestment", parseFloat(e.target.value))
            }
            value={userInput.initialInvestment}
          />
        </p>
        <p>
          <label>Investimento Anual</label>
          <input
            type="number"
            required
            onChange={(e) =>
              onChange("annualInvestment", parseFloat(e.target.value))
            }
            value={userInput.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Retorno Esperado</label>
          <input
            type="number"
            required
            onChange={(e) =>
              onChange("expectedReturn", parseFloat(e.target.value))
            }
            value={userInput.expectedReturn}
          />
        </p>
        <p>
          <label>Duração (Anos)</label>
          <input
            type="number"
            required
            onChange={(e) => onChange("duration", parseInt(e.target.value, 10))}
            value={userInput.duration}
          />
        </p>
      </div>
    </section>
  );
};
