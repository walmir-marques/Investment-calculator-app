import { useState } from "react";
import { Header } from "./componenets/Header";
import "./index.css";
import calculateInvestmentResults from "./util/investment";
import { UserInput } from "./componenets/UserInput";
import { Results } from "./componenets/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 2000,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prev) => {
      return { ...prev, [inputIdentifier]: newValue };
    });
  }

  return (
    <div>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && <p>O valor da Duração deve ser maior que 0. </p>}
      {inputIsValid && <Results input={userInput} />}
    </div>
  );
}

export default App;
