import React from "react";

export default function Todolist({ list }) {
  return (
    <div className="Todo">
        {list.map((item, s1) => (
          <li key={s1}>{item}</li>
        ))}
     
    </div>
  );
}