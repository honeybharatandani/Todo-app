import React from "react";

export default function Todolist({ list }) {
  return (
    <div className="Todo">
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
     
    </div>
  );
}