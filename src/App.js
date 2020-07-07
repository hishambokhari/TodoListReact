import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    message: 'This message is from the state',
    newTodo: ''
  }

  formSubmitted(event) {
    event.preventDefault();

    console.log(this.state.newTodo);
  }

  newTodoChanged(event) {
    this.setState({newTodo: event.target.value})
  }
  
  render(){

  
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <form onSubmit={(event) => this.formSubmitted(event)}>
          <label htmlFor="newTodo">New Todo</label>
          <input onChange={(event) => this.newTodoChanged(event)} id="newTodo" name="newTodo" />
          <button type="submit">Add Todo</button>
          
        </form>
      </div>
    );
  }
  
}

export default App;
