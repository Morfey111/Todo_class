import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <ul className="todos">
                    {this.props.todos.map(todo =>
                        <li dataid={todo.id} key={todo.id}>
                            <span style={{ textDecoration: todo.completed ? "line-through" : "none",}}>{todo.id}.<span className="space">{todo.title}</span></span>
                            <Todo {...todo} deleteTodo={this.props.deleteTodo} chekTodo={this.props.chekTodo} />
                        </li>)}
                </ul>
                <h3>Total ToDos: {this.props.todos.length}</h3>
            </div >
            
        );
        
    }
}
export default TodoList;