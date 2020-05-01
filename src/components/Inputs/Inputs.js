import React from 'react';
import './inputs.css';

class Inputs extends React.Component {


  render() {
    return (
      <div className="inputs-container">
        <div id="wrapper">
          <div id="text-wrapper">
            <section className="calculator-input" id="main-input">
              main-input
            </section>
            <section className="calculator-input" id="sub-input">
              sub-input
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default Inputs;