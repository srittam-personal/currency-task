import React, { Component } from "react";
import ReactDOM from "react-dom";

import { CurrencyDataProvider } from "./components/currencyContext";
import Currencypopulate from "./components/currencyPopulate";
import AddCurrency from "./components/addCurrency";
import BaseCurrency from "./components/baseCurrency";

import "./styles.scss";

class App extends Component {
  render() {
    return (
      <CurrencyDataProvider>
        <BaseCurrency />
        <Currencypopulate />
        <AddCurrency />
      </CurrencyDataProvider>
    );
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
