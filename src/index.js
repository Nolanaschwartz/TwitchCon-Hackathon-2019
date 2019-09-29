import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";

import App from "./components/App";
import Badges from "./components/Badges/Badges";

ReactDOM.render(
  <Provider store={store}>
    <App />
    <Badges />
  </Provider>,
  document.getElementById("root")
);
