import React from "react";
import { useState } from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import OutputTodo from "./components/OutputTodo";



function App() {
  const [inputVal, setVal] = useState('')
  const [todos, setTodos] = useState([])

  function writeTodo(e) {
    setVal(e.target.value)
  }

  function addTodos(){
    if(inputVal != '')
      {
        setTodos((prevTodo) => [...prevTodo, inputVal])
        setVal('')
      }
  }
  function delTodo(todoIndex){
    setTodos((prevTodos) => prevTodos.filter((prevTodos, prevTodosIndex) =>{
      return prevTodosIndex != todoIndex
    })
  )
  }

  
  console.log(todos)
  return (
    <main>
      <h1>To Do List</h1>
      <InputTodo inputVal={inputVal} writeTodo={writeTodo} addTodos={addTodos}/>
      <OutputTodo todos={todos} delTodo = {delTodo} />
    </main>
  );
}

export default App;
