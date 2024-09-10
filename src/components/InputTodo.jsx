import React from "react";

function InputTodo({inputVal, writeTodo, addTodos}) {
  return (
    <div className="main-container">
      <input type="text" value={inputVal} onChange={writeTodo}/>
      <button onClick={addTodos}>+</button>
    </div>
  );
}

export default InputTodo;
