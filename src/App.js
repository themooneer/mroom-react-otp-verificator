import React from "react";
import "./App.css";
import OneTimePasswordInput from "./lib/OneTimePasswordInput";

function App() {
  return <OneTimePasswordInput onVerifyCode={(input) => input === "000000"} />;
}

export default App;
