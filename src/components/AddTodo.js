import React, { Component } from "react";

export class AddTodo extends Component {
  constructor(props) {
    super(props);
  
  }

 
  render() {
    return (
      <div>
        <input type="text" autoFocus placeholder="Add new Todo" />
        <button 
        type="button" 
        onClick={()=>{this.props.addTodo(this.state.value)}}
        onChange = {(e)=>{this.setState({value: e.target.value})}}
        >Add</button> 
      </div>
    );
  }
}

export default AddTodo;
