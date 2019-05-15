import React from "react";
import todoArray from "./components/TodoComponents/TodoList";
import Todo from "./components/TodoComponents/Todo";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = { todoList: todoArray, task: "", id: "", completed: "" };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTodoHandler = event => {
    event.preventDefault();
    let newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo],
      task: "",
      id: "",
      completed: ""
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List:</h1>
        <div>
          {this.state.todoList.map(todo => (
            <Todo todo={todo} key={todo.task} />
          ))}
        </div>
        <TodoForm
          addTodoHandler={this.addTodoHandler}
          changeHandler={this.changeHandler}
          task={this.state.task}
          id={this.state.id}
          completed={this.state.completed}
        />
      </div>
    );
  }
}

export default App;
