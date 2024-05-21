import React from "react";

function Todo({ todo,index,deltodo }) {
  return (
    <div className="todo">
      <div className="action">
        <p>{todo}</p>
        <input type="checkbox"></input>
        <button onClick={()=>deltodo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
