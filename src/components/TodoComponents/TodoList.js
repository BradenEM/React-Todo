// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.todoArray.map(item => (
        <Todo
          cursor="pointer"
          item={item}
          key={item.id}
          toggleItem={props.toggleItem}
        />
      ))}
    </div>
  );
};

export default TodoList;
