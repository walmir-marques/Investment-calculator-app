import React from "react";
import calculateInvestmentResults from "../util/investment.js";
import { formatter } from "../util/investment.js";

export const Results = ({ input }) => {
  const annualData = calculateInvestmentResults(input);
  const initialInvestiment =
    annualData[0].valueEndOfYear -
    annualData[0].interest -
    annualData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Ano</th>
          <th>Valor Total</th>
          <th>Rendimento(Ano)</th>
          <th>Rendimento Total</th>
          <th>Capital Investido</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((item) => {
          const totalInterest =
            item.valueEndOfYear -
            item.annualInvestment * item.year -
            initialInvestiment;

          const totalAmountInvested = item.valueEndOfYear - totalInterest;

          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
