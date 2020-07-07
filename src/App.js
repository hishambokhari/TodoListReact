import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    message: 'This message is from the state'
  }
  render(){
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <form>
          <label htmlFor="newTodo">New Todo</label>
          <input id="newTodo" name="newTodo" />
        </form>
      </div>
    );
  }
  
}

export default App;
