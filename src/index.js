import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </Provider>
);
