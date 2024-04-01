import React from "react";

function Components2({ selectedoption }) {
  return (
    <>
      <div style={{ width: "400px", height: "50px", backgroundColor: "gray" }}>
        Child Component 2
        <button onClick={() => selectedoption("Option 2")}>Option 2</button>
      </div>
    </>
  );
}

export default Components2;
