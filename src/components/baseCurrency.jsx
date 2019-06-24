import React, { useContext, useState } from "react";
import { CurrencyDataContext } from "./currencyContext";

const BaseCurrency = () => {
  //context setup and local variables declaration
  const [data, , firstSet, setFirstState, baseCurrency] = useContext(
    CurrencyDataContext
  );
  const [price, setPrice] = useState(1);
  const firsetOriginalCopy = [];

  // common function to keep the initial copy of the added currency in list
  const extarctContentFromData = (currencyArr, updateArr) => {
    data.filter(function(val) {
      if (val[0] === currencyArr) {
        updateArr.push(val);
      }
    });
  };

  // copy from firstset and set it to initial currency data
  firstSet.map(currency => {
    extarctContentFromData(currency[0], firsetOriginalCopy);
  });

  // check if only numbers are entered inside the textbox
  const updatePrice = e => {
    let targetVal = e.target.value;
    if (!isNaN(targetVal)) {
      setPrice(targetVal);
    } else {
      alert("Enter a valid number");
    }
  };

  // updation of all the curency price based on amount entered in the text field
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
