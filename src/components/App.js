import React, { useState } from "react";
import "./../styles/App.css";
import ChildCom from "./ChildCom";

const App = () => {
  const [state, setState] = useState(Data);
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <ChildCom state={state} setOption={setSelectedOption} />
      <p>Selected Option : {selectedOption ?? ""}</p>
    </div>
  );
};
const Data = [
  { title: "Child Component 1", option: "option 1", bg: "blue" },
  { title: "Child Component 2", option: "option 2", bg: "red" },
];

export default App;
