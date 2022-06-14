import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./app/App";
import "./index.css";
import {BrowserRouter as Router} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
    </Router>
);
