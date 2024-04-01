import React, { useState } from "react";
import Components1 from "./component1";
import Components2 from "./component2";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const selectedoption = (option) => {
    console.log(option);
    setSelectedOption(option);
  };

  return (
    <>
      <div
        className="parent"
        style={{ width: "500px", height: "300px", backgroundColor: "yellow" }}
      >
        <h1 style={{ textAlign: "center" }}>Parent Component</h1>
        <Components1 selectedoption={selectedoption} />
        <Components2 selectedoption={selectedoption} />
        <p>Selected Option: {selectedOption}git </p>
      </div>
    </>
  );
};

export default App;
