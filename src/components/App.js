import React, { useState } from "react";
import "./../styles/App.css";
import ChildCom from "./ChildCom";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <ChildCom setOption={setSelectedOption} />
      <p className="selected">Selected Option : {selectedOption ?? ""}</p>
    </div>
  );
};

export default App;
