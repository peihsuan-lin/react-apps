import UserInput from "./components/UserInput";
import { useState } from "react";

const INITIAL_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 600,
  expectedReturn: 60,
  duration: 5,
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

  return (
    <>
      <UserInput inputChange={handleChange} input={input} />
    </>
  );
}

export default App;
