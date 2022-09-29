import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.todos.map((todo) => (
          <p dataid={todo.id} key={todo.id} className="task">
            <span className={todo.completed ? "done" : ""}>
              {todo.id}.<span className="space">{todo.title}</span>
            </span>
            <Todo
              {...todo}
              deleteTodo={this.props.deleteTodo}
              chekTodo={this.props.chekTodo}
            />
          </p>
        ))}

        <h3 style={{ color: "white" }}>
          Total ToDos: {this.props.todos.length}
        </h3>
      </div>
    );
  }
}
export default TodoList;
