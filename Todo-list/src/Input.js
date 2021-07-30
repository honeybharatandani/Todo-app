import React from "react";
// import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function Input({ handleDelete, changeHandler, text, clickHandler }) {
  return (
    <div>     
      <input className="inputList" placeholder="Enter a To-do" onChange={changeHandler} value={text} />
      <button onClick={() => clickHandler(text)}>Add</button>
        {/* <AddCircleIcon /> */}

    </div>
    
  );
}