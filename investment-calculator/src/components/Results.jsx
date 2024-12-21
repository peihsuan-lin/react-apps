import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
  const result = calculateInvestmentResults(input);
  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Investment Value</th>
            <th scope="col">Interest (Year)</th>
            <th scope="col">Total Interest</th>
            <th scope="col">Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {result.map((row) => {
            const totalInterest =
              row.valueEndOfYear -
              row.annualInvestment * row.year -
              initialInvestment;
            const totalAmountInvested = row.valueEndOfYear - totalInterest;
            return (
              <tr key={row.year}>
                <td>{row.year}</td>
                <td>{formatter.format(row.valueEndOfYear)}</td>
                <td>{formatter.format(row.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
