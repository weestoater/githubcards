import React from "react";
import axios from "axios";

class Form extends React.Component {
  state = { userName: "" };

  handleSubmit = async event => {
    event.preventDefault();
    const response = await axios.get(
      `http://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(response.data);
    this.setState({ userName: "" });
  };

  render() {
    return (
      <form action="" className="form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={this.state.userName}
            onChange={event => this.setState({ userName: event.target.value })}
            placeholder="Github username"
          />
          <button className="btn btn-primary">Add Card</button>
        </div>
      </form>
    );
  }
}

export default Form;
