import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

// mdb css
import "mdb-react-ui-kit/dist/css/mdb.min.css";
// react toastify-css
import "react-toastify/dist/ReactToastify.css";

// cusom css
import "./index.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
