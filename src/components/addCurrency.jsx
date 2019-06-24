import React, { useContext, useState } from "react";
import { CurrencyDataContext } from "./currencyContext";

const AddCurrency = () => {
  const [data, , firstSet, setFirstState] = useContext(CurrencyDataContext);
  const [currencyVal, setCurrency] = useState("");
  const getCurrency = e => setCurrency(e.target.value);

  const filterCurrency = () => {
    let currencyInputVal = currencyVal.toUpperCase();

    let filteredCurrency = data.filter(newCurrency => {
      if (newCurrency[0] === currencyInputVal) {
        return newCurrency;
      }
    });

    return filteredCurrency[0];
  };

  const addCurrency = e => {
    e.preventDefault();
    console.log(currencyVal);
    let filterResult = filterCurrency(),
      baseVal = document.querySelector(".base-val").value,
      isElePresent = false;

    firstSet.map(existingCurrency => {
      if (existingCurrency[0] == currencyVal) {
        isElePresent = true;
      }
    });

    if (!isElePresent) {
      setFirstState([
        ...firstSet,
        [filterResult[0], filterResult[1] * baseVal]
      ]);
    } else {
      alert("already added to list");
    }

    e.target.classList.remove("active");
  };

  const currencyDropdownDisplay = e => {
    e.target.parentElement.classList.add("active");
  };

  return (
    <form onSubmit={addCurrency} className="currency-form">
      <a
        href="javascript:;"
        onClick={currencyDropdownDisplay}
        className="add-currency-item button-secondary"
      >
        Add More Currency
      </a>
      <div className="currency-selector-section">
        <select
          className="currency-selector"
          value={currencyVal}
          onChange={getCurrency}
        >
          {data.map(currency => (
            <option key={currency[0]} value={currency[0]}>
              {currency[0]}
            </option>
          ))}
        </select>
        <button className="button-secondary submit-button">Submit</button>
      </div>
    </form>
  );
};

export default AddCurrency;
