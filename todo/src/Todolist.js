import React from "react";

export default function Todolist({ list }) {
  return (
    <div className="Todo">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
     
    </div>
  );
}