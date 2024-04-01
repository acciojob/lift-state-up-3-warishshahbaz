import React from "react";

function Components1({ selectedoption }) {
  return (
    <>
      <div
        style={{
          width: "400px",
          height: "50px",
          backgroundColor: "red",
          marginBottom: "10px",
        }}
      >
        Child Component 1
        <button onClick={() => selectedoption("Option 1")}>Option 1</button>
      </div>
    </>
  );
}

export default Components1;
