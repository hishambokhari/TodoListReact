import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    message: 'This message is from the state'
  }

  formSubmitted(event) {
    event.preventDefault();

    console.log('form submitted');
  }
  
  render(){

  
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <form onSubmit={this.formSubmitted}>
          <label htmlFor="newTodo">New Todo</label>
          <input id="newTodo" name="newTodo" />
          <button type="submit">Add Todo</button>
          
        </form>
      </div>
    );
  }
  
}

export default App;
