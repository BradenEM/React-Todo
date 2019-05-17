import React from "react";

function TodoForm(props) {
  return (
    <form name="AddTodoItem" onSubmit={props.addTodoHandler}>
      <input
        type="text"
        value={props.task}
        onChange={props.changeHandler}
        name="task"
        placeholder="New Task"
      />
      <button onClick={props.addTodoHandler}>Submit</button>
      <button className="clear-items" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </form>
  );
}

export default TodoForm;
