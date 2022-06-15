import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Calculator from "./components/CalculatorComponents/Calculator/Calculator";
import ApiPosts from "./components/ApiComponents";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <ApiPosts />
    <Calculator />
  </>
);
