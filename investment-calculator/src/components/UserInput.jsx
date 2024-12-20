import { useState } from "react";

export default function UserInput() {
  const [input, setInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 600,
    expectedReturn: 60,
    duration: 5,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>INITIAL INVESTMENT</label>
            <input
              type="number"
              required
              name="initialInvestment"
              value={input.initialInvestment}
              onChange={handleChange}
            />
          </p>
          <p>
            <label>ANNUAL INVESTMENT</label>
            <input
              type="number"
              required
              name="annualInvestment"
              value={input.annualInvestment}
              onChange={handleChange}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>EXPECTED RETURN</label>
            <input
              type="number"
              required
              name="expectedReturn"
              value={input.expectedReturn}
              onChange={handleChange}
            />
          </p>
          <p>
            <label>DURATION</label>
            <input
              type="number"
              required
              name="duration"
              value={input.duration}
              onChange={handleChange}
            />
          </p>
        </div>
      </section>
    </>
  );
}
