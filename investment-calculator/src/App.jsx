import UserInput from "./components/UserInput";

const INITIAL_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 600,
  expectedReturn: 60,
  duration: 5,
};

function App() {
  return (
    <>
      <UserInput />
    </>
  );
}

export default App;
