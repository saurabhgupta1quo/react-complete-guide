import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'supermax'
  }

  usernameChangedHandler = (event) => {
   this.setState({username: event.target.value})
  }

  render() {
    return (
      <div className="App">
      <ol>
      <li>Create Two new Components.</li>
      </ol>
      <UserInput 
      changed = {this.usernameChangedHandler}
      currentName ={this.state.username} />
      <UserOutput userName = {this.state.username} />
      <UserOutput userName = {this.state.username} />
      <UserOutput userName = "max" />
      </div>
    );
    //return React.createElement('div', {className : 'App'}, React.createElement ('h1', null , 'Does this work now?'));
  }
}

export default App;
