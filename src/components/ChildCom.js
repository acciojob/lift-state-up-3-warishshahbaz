import React, { useState } from "react";

function ChildCom({ state, setOption }) {
  return (
    <>
      <div className="wrapper">
        {state.map((val) => {
          return (
            <div
              style={{ backgroundColor: `${val.bg}` }}
              className="child_container"
            >
              <p>{val.title}</p>
              <button onClick={() => setOption(val.option)}>
                {val.option}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ChildCom;
