import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
