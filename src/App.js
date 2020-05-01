import React, { Component } from 'react';
import Inputs from './components/Inputs/Inputs';
import Numbers from './components/Numbers/Numbers';

class App extends Component {
    render() {
      return (
        <div id="app" >
          <Inputs />
          <Numbers />
        </div>
      );
    }
}

export default App;