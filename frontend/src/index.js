import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import GlobalStyle from "./components/GlobalStyles";

import HomePage from "./pages/Home";

import { Provider } from "react-redux";
import createStore from "./store";
import { PersistGate } from "redux-persist/es/integration/react";
const { store, persistor } = createStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <GlobalStyle />
        <HomePage />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
