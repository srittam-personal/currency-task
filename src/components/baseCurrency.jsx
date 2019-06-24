import React, { useContext, useState } from "react";
import { CurrencyDataContext } from "./currencyContext";

const BaseCurrency = () => {
  const [data, , firstSet, setFirstState, baseCurrency] = useContext(
    CurrencyDataContext
  );
  const [price, setPrice] = useState(1);
  const firsetOriginalCopy = [];

  const extarctContentFromData = (currencyArr, updateArr) => {
    data.filter(function(val) {
      if (val[0] === currencyArr) {
        updateArr.push(val);
      }
    });
  };

  firstSet.map(currency => {
    extarctContentFromData(currency[0], firsetOriginalCopy);
  });

  const updatePrice = e => {
    if (!isNaN(e.target.value)) {
      setPrice(e.target.value);
    } else {
      alert("Enter a valid number");
    }
  };

  const updateAllPrice = e => {
    let updatedFirstSet = firsetOriginalCopy.map(currency => {
      return [currency[0], currency[1] * e.target.value];
    });

    setFirstState(updatedFirstSet);
  };

  return (
    <div className="base-curency">
      <span className="usd-label">
        <i>USD - United States Dollars</i>
      </span>
      <form>
        <label>{baseCurrency}</label>
        <input
          className="base-val"
          type="text"
          name="price"
          value={price}
          onChange={updatePrice}
          onKeyUp={updateAllPrice}
        />
      </form>
    </div>
  );
};

export default BaseCurrency;
