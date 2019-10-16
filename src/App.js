import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      randomNumber: 31,
    }
  }
  
  // anytime you need to update state AND there are props or state that you need to use within the update:
  // by writing a function instead of an object, e.g. this.state. below is proper syntax.
  handleClick = () => {
    this.setState((prevState, prevProps) => {
      // increment prop can be found in 'index.js' where the prop increment is set
      return {randomNumber : prevState.randomNumber + prevProps.increment}
    }, () => console.log(this.state.randomNumber));
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.randomNumber}</p>
          <button
            onClick={this.handleClick}
          >
            Update State
          </button>
        </header>
      </div>
    );
  }
}

export default App;