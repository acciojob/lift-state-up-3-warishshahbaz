import React from "react";

function ChildCom({ setOption }) {
  return (
    <>
      <div className="wrapper">
        <div style={{ backgroundColor: `#c95a1a` }} className="child_container">
          <p className="p">Child Component 1</p>
          <button onClick={() => setOption("Option 1")}>Option 1</button>
        </div>
        <div style={{ backgroundColor: `#fcce00` }} className="child_container">
          <p className="p">Child Component 2</p>
          <button onClick={() => setOption("Option 2")}>Option 2</button>
        </div>
      </div>
    </>
  );
}

export default ChildCom;
