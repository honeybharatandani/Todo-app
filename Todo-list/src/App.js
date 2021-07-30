import React, { useState } from "react";
import Input from "./Input";
import Todolist from "./Todolist";
import "./App.css";
// import logo from './logo.png';

export default function App() {

// We declare a state variable called text , and set it to 0 & setText for changing text
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

// used for inputing text

  const changeHandler = (e) => {
    setText(e.target.value);
  };

// used spread operator for displaying more than 1 values
  // used value as a props

  const clickHandler = (value) => {
    setList([...list, value]);
    setText("");
  };

  const handleDelete = ({ id }) => {
    setList(list.filter((text) => text.id !== id));
  };


  return (
    <div className="App">
            {/* <img className="Logo" src={logo} alt="Logo" /> */}
          {/* calling events in jsx syntax */}
      <Input
        changeHandler={changeHandler}
        text={text}
        clickHandler={clickHandler}
      />
      <button className="delete" onClick={() => handleDelete(text)}>Delete</button>
      <Todolist list={list} />
    </div>
  );
}
