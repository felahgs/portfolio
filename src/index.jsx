import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./pages/MainPage/MainPage";
import reportWebVitals from "./reportWebVitals";
import "./assets/css/bootstrap.min.css";
import "./assets/fonts/font-awesome.min.css";
import "./assets/css/global.css";
import "./assets/css/responsive.css";
import "./assets/fonts/simple-line-icons.css";

ReactDOM.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
