import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import TodoBox from "./components/TodoBox";
function App() {
  const [inpVal, setInpVal] = useState("");

  const [todos, setTodos] = useState([]);

  function writetodo(e) {
    setInpVal(e.target.value);
  }

  function deltodo(todoIndex){
    setTodos((prevTodos)=>
    prevTodos.filter((prevTodos,prevTodosIndex)=>{
      return prevTodosIndex != todoIndex;
    })
    )
  }

  function addTodo() {
    if (inpVal != "") {
      setTodos((prevTodos) => [...prevTodos, inpVal]);
    }
  }

  return (
    <>
      <h1>To Do List</h1>
      <Input inpVal={inpVal} writetodo={writetodo} addTodo={addTodo} />
      <TodoBox todos={todos} deltodo={deltodo}/>
      
    </>
  );
}

export default App;
