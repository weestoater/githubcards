import React from 'react';

class Form extends React.Component {

    state = { userName: '' };
   
    handleSubmit = async(event) => {
        event.preventDefault();
        const response = await axios.get(`http://api.github.com/users/${this.state.userName}`)
        this.props.onSubmit(response.data);
        this.setState( { userName: '' });
    };
    
    render () {
      return (
        <form action="" onSubmit={ this.handleSubmit }>
          <input type="text" value={ this.state.userName } onChange={ event => this.setState({ userName: event.target.value })} placeholder="Github username" />
          <button>Add Card</button>
        </form>
      );
    }
  }

  export default Form;