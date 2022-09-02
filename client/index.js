import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import history from "./history";
import store from "./store";
import App from "./App";

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(
  <>
    <div>Testing</div>

    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </>
);
