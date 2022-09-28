import React from 'react';
import Header from './components/Header';
import InputArea from './components/InputArea';
import TodoList from './components/TodoList';

const url = 'http://localhost:5000/todos'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }
  }

  componentDidMount() {
    fetch(url)
      .then(r => {
        if (r.ok) {
          return r.json()
        }
      })
      .then(data => {
        this.setState({ todos: data })
      })
      .catch(err => console.warn(err));
  }

  addTodo = (title) => {
    const newTodo = {
      title: title,
      completed: false,
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(r => {
        if (r.ok) {
          return r.json()
        }
      })
      .then(todo => {
        this.setState({
          todos: [...this.state.todos, todo]
        })
      })
  }

  deleteTodo = (todoId) => {
    fetch(`${url}/${todoId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          this.setState({
            todos: [...this.state.todos.filter(({ id }) => id !== todoId)]
          });
        } else {
          console.error("Error Server");
        }
      })
      .catch(e => {
        console.error("Ups... Something  wrong in a DELETE request.");
      });
  }

  chekTodo = (todoId) => {
    const checkedToDo = this.state.todos.find(({ id }) => id === todoId);
    console.log(checkedToDo.completed)
    fetch(`${url}/${todoId}`, {
      method: 'PUT',
      body: JSON.stringify({ ...checkedToDo, completed: true }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then((response) => {
        if (response.ok) {
          this.setState({
            todos: [...this.state.todos.map(todo => ({ ...todo, completed: todo.id === todoId ? !todo.completed : todo.completed}))]
          });
        } else {
          console.error("Server  error...");
        }
      })
      .catch(e => {
        console.error("Something went wrong.");
      });
  };

  render() {
    return (
      <div className="page">
        <Header />
        <main className="todo-app">
          <InputArea addTodo={this.addTodo} />
          <TodoList todos={this.state.todos}
            chekTodo={this.chekTodo}
            deleteTodo={this.deleteTodo} />
        </main>
      </div>
    );
  }
}
export default App