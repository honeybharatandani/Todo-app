import React from "react";

export default function Todolist({ list }) {
  return (
    <div className="Todo">
      <ol>
        {list.map((item, s1) => (
          <li key={s1}>{item}</li>
        ))}
     </ol>
    </div>
  );
}