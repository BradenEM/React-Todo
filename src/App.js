import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoArray: [
        { task: "Complete that freaking MVP", id: Date.now(), completed: false }
      ],
      task: "",
      id: "",
      completed: false
    };
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
      todoArray: [...this.state.todoArray, newTodo],
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
          <TodoList todoArray={this.state.todoArray} />
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
