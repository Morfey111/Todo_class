import React from "react";

class InputArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  render() {
    return (
      <form>
        <input
          className="input-field"
          type="text"
          autoFocus
          placeholder="add new todo ..."
          value={this.state.value}
          onChange={(e) => {
            this.setState({ value: e.target.value });
          }}
        />
        <button
          className="buttonAdd"
          onClick={(e) => {
            this.props.addTodo(this.state.value);
            this.setState({ value: "" });
          }}
          type="submit"
        >
          Add
        </button>
      </form>
    );
  }
}

export default InputArea;
