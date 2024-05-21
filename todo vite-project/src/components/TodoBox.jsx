import React from "react";
import Todo from "./Todo";
function TodoBox({ todos, deltodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo todo={todo} index={index} deltodo={deltodo} />
      ))}
    </div>
  );
}

export default TodoBox;
