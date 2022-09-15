import React, { Component } from "react";

export class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  
  }

 
  render() {
    return (
      <div>
        <input 
        type="text" 
        autoFocus 
        placeholder="Add new Todo"
        onChange = {(e)=>{this.setState({value: e.target.value})}}
         />
        <button type="button" onClick={()=>{this.props.addTodo(this.state.value)}}>Add</button> 
        <h3>All Todos:{}</h3>
      </div>
    );
  }
}

export default AddTodo;
