import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NumberButtons from './components/number-buttons';

class App extends Component {
    constructor(props) {
       super(props);
    }

    render() {
      return (<NumberButtons />);
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));