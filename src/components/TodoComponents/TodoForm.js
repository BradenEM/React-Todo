import React from "react";
import "./Todo.css";

function TodoForm(props) {
  return (
    <form
      className="todo-form"
      name="AddTodoItem"
      onSubmit={props.addTodoHandler}
    >
      <input
        className="task-input"
        type="text"
        value={props.task}
        onChange={props.changeHandler}
        name="task"
        placeholder="New Task"
      />
      <button className="submit-btn" onClick={props.addTodoHandler}>
        <strong>Add</strong>
      </button>
      <button className="clear-btn" onClick={props.clearCompleted}>
        <strong>Clear Completed</strong>
      </button>
    </form>
  );
}

export default TodoForm;
