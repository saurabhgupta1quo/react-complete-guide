import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation';
import Char from './Char/Char';


class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
   this.setState({userInput: event.target.value});
  }

  deleteCharHandler = (index) => {
   const text = this.state.userInput.split('');
   text.splice(index, 1);
   const updatedText =text.join('');
   this.setState({userInput: updatedText});
  }

  render() {
   
    let charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
      character={ch} 
      key={index}
      clicked={() => this.deleteCharHandler(index)} />;
    });

    return (
      <div className="App">
      <ol>
      <li>Create Two new Components.</li>
      </ol>
      <p>Hint: Keep in mind that Javascript string are basically arrays!.</p>
      <hr />
      <input 
      type = "text" 
      onChange={this.inputChangedHandler}
      value={this.state.userInput} />
      <p>{this.state.userInput}</p>
      <Validation inputLength={this.state.userInput.length} />
      {charList}
      </div>
    );
    //return React.createElement('div', {className : 'App'}, React.createElement ('h1', null , 'Does this work now?'));
  }
}

export default App;
