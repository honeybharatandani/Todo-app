import React from "react";

export default function Input({ handleDelete, changeHandler, text, clickHandler }) {
  return (
    <div>     
      <input className="inputList" placeholder="Enter a To-do" onChange={changeHandler} value={text} />
     <br/>
      <button onClick={() => clickHandler(text)}>Add</button>
    </div>
    
  );
}