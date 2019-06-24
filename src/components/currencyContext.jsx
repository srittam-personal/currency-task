import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const CurrencyDataContext = createContext();

export const CurrencyDataProvider = props => {
  // initialization of state data to be used in react context
  const [data, setData] = useState([]);
  const [firstSet, setFirstState] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState("");

  // Api call and setting up the response data
  useEffect(() => {
    axios
      .get("https://api.exchangeratesapi.io/latest?base=USD")
      .then(result => {
        const finalData = Object.entries(result.data.rates);
        setData(finalData);
        setFirstState(finalData.slice(0, 4));
        setBaseCurrency(result.data.base);
      });
  }, []);

  return (
    <CurrencyDataContext.Provider
      value={[data, setData, firstSet, setFirstState, baseCurrency]}
    >
      {props.children}
    </CurrencyDataContext.Provider>
  );
};
