import React from 'react';
import Inputs from './components/Inputs/Inputs';
import Buttons from './components/Buttons/Buttons';
import { subtraction, addition, multiplication, division } from './components/commons/types';

class App extends React.Component {
  state = {
    mainInput: 0,
    subInput: 0,
    mainDisplay: '0',
    hasClicked: false,
    operator: '',
    temp: ''
  };

  mainRes = '';
  subRes = '';
  onSetNumbers = (arg) => {
    const { mainDisplay, hasClicked, temp } = this.state;

    if (hasClicked === true) {
      this.subRes += arg;
      this.setState({ subInput: parseInt(this.subRes), mainDisplay: this.subRes })
      this.mainRes = '';
    } else {
      this.mainRes += arg;
      this.setState({ mainInput: parseInt(this.mainRes), mainDisplay: this.mainRes })
      this.subRes = '';
    }


  };

  onSetOperators = (arg) => {
    this.setState({ operator: arg });
  };

  onToggleClick = () => {
    const { hasClicked } = this.state;

    hasClicked === false
      ? this.setState({ hasClicked: true })
      : this.setState({ hasClicked: false });
  };

  onAdd = () => {
    const { mainInput, subInput, operator } = this.state;

    let sum = parseInt(mainInput, 10);
    sum += parseInt(subInput, 10);

    if (operator === addition) {
      this.setState({ mainInput: sum, subInput: 0, mainDisplay: sum });
    }
  };

  onSubtract = () => {
    const { mainInput, subInput, operator } = this.state;

    let difference = parseInt(mainInput, 10);
    difference -= parseInt(subInput, 10);

    if (operator === subtraction) {
      this.setState({ mainInput: difference, subInput: 0, mainDisplay: difference });
    }
  };

  onDivide = () => {
    const { mainInput, subInput, operator } = this.state;

    let difference = parseInt(mainInput, 10);
    difference /= parseInt(subInput, 10);

    if (operator === division) {
      this.setState({ mainInput: difference, subInput: 0, mainDisplay: difference });
    }
  };

  onMultiply = () => {
    const { mainInput, subInput, operator } = this.state;

    let product = parseInt(mainInput, 10);
    product *= parseInt(subInput, 10);
    
    if (operator === multiplication) {
      this.setState({ mainInput: product, subInput: 0, mainDisplay: product });
    }
  };

  onClear = () => {
    this.setState({
      mainInput: 0,
      subInput: 0,
      mainDisplay: '0',
      hasClicked: false,
      hasValue: false
    })
    this.mainRes = '',
      this.subRes = ''
  }

  render() {
    const { mainInput, subInput, hasValue } = this.state;

    return (
      <div id="app" >
        <Inputs
          inputs={this.state}

        />
        <Buttons
          onClear={this.onClear}
          onSetNumbers={this.onSetNumbers}
          operator={this.state.operator}
          onSetOperators={this.onSetOperators}
          onAdd={this.onAdd}
          onSubtract={this.onSubtract}
          onDivide={this.onDivide}
          onMultiply={this.onMultiply}
          onToggleClick={this.onToggleClick}
        />

        <span>Created by Stephen Corral</span>
      </div>
    );
  }
}

export default App;