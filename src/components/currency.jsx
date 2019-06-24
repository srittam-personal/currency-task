import React from "react";
import RemoveCurrency from "./removeCurrency";

const Currency = ({ currencyData, removeCurrency, originalSet }) => {
  return (
    <li className="item" key={currencyData[0]}>
      <div className="currency-details">
        <p className="currency-code-price">
          <span className="currency-code">{currencyData[0]}</span>
          <span className="currency-price">{currencyData[1]}</span>
        </p>
        <p className="currency-default-price">1 USD = {originalSet[1]}</p>
      </div>
      <RemoveCurrency key={currencyData[0]} removeCurrency={removeCurrency} />
    </li>
  );
};

export default Currency;
