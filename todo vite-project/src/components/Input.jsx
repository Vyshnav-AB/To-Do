import React from "react";

function Input({inpVal,writetodo,addTodo}) {
  return (
    <div className="inp">
      <input type="text" value={inpVal} onChange={writetodo}></input>
      <button onClick={addTodo}>+</button>
    </div>
  );
}

export default Input;
