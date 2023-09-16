import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./context/StateProvider";
import { InitialState } from "./context/InitialState";
import reducer from "./context/Reducer";
ReactDOM.render(
  <Router>
    <StateProvider initialState={InitialState} reducer={reducer}>
    <App />
    </StateProvider>
  </Router>,
  document.getElementById("root")
);
