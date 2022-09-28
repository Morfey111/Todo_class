import React from "react"
import { FaTrashAlt, FaCheck } from "react-icons/fa";


class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <span><FaCheck id={this.props.id} todo-title={this.props.title}
                onClick={() => { this.props.chekTodo(this.props.id) }}/>
                <FaTrashAlt key={this.props.id} className="space"
                onClick={() => { this.props.deleteTodo(this.props.id) }}/></span >
        );
    }
}
export default Todo