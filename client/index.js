import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import history from "./history";
import store from "./store";
import App from "./App";
import Canvas3D from "./components/Canvas3D";
import five from "./assets/five.png";

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(
  <>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
    <Canvas3D />
  </>
);
