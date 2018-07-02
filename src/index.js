import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NumberDisplay from './components/number-display.js';

class App extends Component {
  
    render() {
      return (<NumberDisplay />);
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));