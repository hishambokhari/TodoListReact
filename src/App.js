import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    message: 'This message is from the state'
  }
  render(){
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
      </div>
    );
  }
  
}

export default App;
