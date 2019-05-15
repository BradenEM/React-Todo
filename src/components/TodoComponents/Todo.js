import React from "react";
import "./Todo.css";

function Todo(props) {
  return (
    <div className="list-item">
      <input type="checkbox" name="checkbox" />
      <p className="task-item">{props.todo.task}</p>
    </div>
  );
}

export default Todo;
