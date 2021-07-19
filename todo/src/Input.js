import React from "react";

export default function Input({ changeHandler, text, clickHandler }) {
  return (
    <div>
      <button onClick={() => clickHandler(text)}>Add Todo-List</button>
     <br />
      <input className="inputList" onChange={changeHandler} value={text} />
      <button className="clear">Clear</button>

    </div>
  );
}