import React, { useState } from "react";
import Input from "./Input";
import Todolist from "./Todolist";
import "./App.css";


export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const changeHandler = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const clickHandler = (value) => {
    setList([...list, value]);
  };

  return (
    <div className="App">
      <Input
        changeHandler={changeHandler}
        text={text}
        clickHandler={clickHandler}
      />
      <Todolist list={list} />
    </div>
  );
}
