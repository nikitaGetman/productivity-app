import React from "react";
import ReactDOM from "react-dom";
import App from "@/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/store";
import authService from "@/services/auth";
import initializeHttpInterceptors from "@/http/interceptors";

import "@/assets/styles/index.css";

// init http client interceptors
initializeHttpInterceptors();

// init auth service
authService.restoreAuthTokens();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
