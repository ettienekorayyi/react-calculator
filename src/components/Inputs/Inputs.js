import React from 'react';
import './inputs.css';

class Inputs extends React.Component {

  render() {
    const { mainInput, subInput, mainDisplay,subDisplay } = this.props.inputs;
    
    return (
      <div className="inputs-container">
        <div id="wrapper">
          <div id="text-wrapper">
            <section className="calculator-input" id="main-input">
              { mainDisplay }
            </section>
            <section className="calculator-input" id="sub-input">
              
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default Inputs;