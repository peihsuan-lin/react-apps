export default function UserInput({ inputChange, input }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            name="initialInvestment"
            value={input.initialInvestment}
            onChange={inputChange}
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            name="annualInvestment"
            value={input.annualInvestment}
            onChange={inputChange}
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
            onChange={inputChange}
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            required
            name="duration"
            value={input.duration}
            onChange={inputChange}
          />
        </p>
      </div>
    </section>
  );
}
