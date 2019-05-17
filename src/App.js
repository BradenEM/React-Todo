import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./App.css";
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoArray: [
        { task: "Click me to strike me out", id: Date.now(), completed: false }
      ],
      task: "",
      id: "",
      completed: false
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  toggleItem = itemId => {
    this.setState({
      todoArray: this.state.todoArray.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      todoArray: this.state.todoArray.filter(item => !item.completed)
    });
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
      <div className="entire-list">
        <h1 className="todo-title">Todo List:</h1>
        <div className="todolist">
          <TodoList
            todoArray={this.state.todoArray}
            toggleItem={this.toggleItem}
          />
        </div>
        <div className="form">
          <TodoForm
            addTodoHandler={this.addTodoHandler}
            changeHandler={this.changeHandler}
            task={this.state.task}
            id={this.state.id}
            completed={this.state.completed}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
