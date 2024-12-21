import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

const INITIAL_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 300,
  expectedReturn: 5.5,
  duration: 12,
};

function App() {
  const [input, setInput] = useState(INITIAL_VALUES);
  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: +value,
    }));
  }

  const inputIsValid = input.duration >= 1;
  return (
    <>
      <UserInput inputChange={handleChange} input={input} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Results input={input} />}
    </>
  );
}

export default App;
