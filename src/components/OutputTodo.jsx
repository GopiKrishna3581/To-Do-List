import React from "react";
import Todos from "./Todos";
function OutputTodo({ todos, delTodo }) {
  return (
    <div className="container">
      {todos.map((todo, index)=> {
        return <Todos key={index} todo={todo} index = {index} delTodo={delTodo}/>;
      })}
    </div>
  );
}

export default OutputTodo;
