import "./App.css";
import React, { Component } from "react";
// import axios from 'axios'
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: "to do something 1 ",
          colmleted: true,
        },
        {
          id: 2,
          title: "to do something 2 ",
          colmleted: true,
        },
      ],
    };
  }

  addTodo = (title) => {
    let newTodo = {
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    // const url = 'http://localhost:8000/todos'

    // const fetcTodos =()=>{
    //   axios.get(url)
    //   .then(res => console.log(res)).catch(err=> console.log(err))
    // }
    return (
      <div>
        <h1>Todo app</h1>
        <AddTodo addTodo={this.addTodo} />
        <TodoList/>
      </div>
    );
  }
}
