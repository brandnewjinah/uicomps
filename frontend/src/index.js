import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import GlobalStyle from "./components/GlobalStyles";

import HomePage from "./pages/Home";

ReactDOM.render(
  <Router>
    <GlobalStyle />
    <HomePage />
  </Router>,
  document.getElementById("root")
);
