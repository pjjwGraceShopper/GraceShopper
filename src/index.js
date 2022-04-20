// // css stylesheets can be created for each component
// // place them in the src/style directory, and import them like this:
// import './style/index.css';

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./components";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(
  <Router>
    <App />
  </Router>
);