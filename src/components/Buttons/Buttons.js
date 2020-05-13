import React from 'react';
import './buttons.css';
import { subtraction, addition, multiplication, division } from '../commons/types';

export default class Buttons extends React.Component {
    
    onEqualsClickEventHandler = () => {
        const { operator, onAdd, onSubtract, onDivide, onMultiply } = this.props;
        if(operator === addition) {
            onAdd();
        } else if(operator === subtraction) {
            onSubtract();
        } else if(operator === division) {
            onDivide();
        } else if(operator === multiplication) {
            onMultiply();
            console.log(operator)
        }
    };

    onAddClickEventHandler = (e) => {
        const { onToggleClick, onAdd, onSetOperators } = this.props;
        onToggleClick();
        onSetOperators(e)
    };

    onMultiplyClickEventHandler = (e) => {
        const { onToggleClick, onAdd, onSetOperators } = this.props;
        onToggleClick();
        onSetOperators(e)
    };

    onDivideClickEventHandler = (e) => {
        const { onToggleClick, onAdd, onSetOperators } = this.props;
        onToggleClick();
        onSetOperators(e)
    };

    onSubtractClickEventHandler = (e) => {
        const { onToggleClick, onAdd, onSetOperators } = this.props;
        onToggleClick();
        onSetOperators(e)
    };

    render() {
        const { onSetNumbers, onClear, onAdd, onSetOperators } = this.props;

        return (
            <div className="numbers">
                <button
                    className="btn-number button"
                    onClick={(e) => onClear()} >C
                </button>
                <button
                    className="btn-number button"
                    value="B"
                    >B
                </button>
                <button
                    className="btn-number button"
                    value="%"
                    onClick={(e) => this.onModClickEventHandler(e.target.value)}>%
                </button>
                <button
                    className="btn-operator button"
                    value="/"
                    onClick={(e) => this.onDivideClickEventHandler(e.target.value)}>/
                </button>
                <button
                    className="btn-number button"
                    value="7"
                    onClick={(e) => onSetNumbers(e.target.value)}>7
                </button>
                <button
                    className="btn-number button"
                    value="8"
                    onClick={(e) => onSetNumbers(e.target.value)}>8
                </button>
                <button
                    className="btn-number button"
                    value="9"
                    onClick={(e) => onSetNumbers(e.target.value)}>9
                </button>
                <button
                    className="btn-operator button"
                    value="*"
                    onClick={(e) => this.onMultiplyClickEventHandler(e.target.value)}>*</button>
                <button
                    className="btn-number button"
                    value="4"
                    onClick={(e) => onSetNumbers(e.target.value)}>4</button>
                <button
                    className="btn-number button"
                    value="5"
                    onClick={(e) => onSetNumbers(e.target.value)}>5</button>
                <button
                    className="btn-number button"
                    value="6"
                    onClick={(e) => onSetNumbers(e.target.value)}>6</button>
                <button
                    className="btn-operator button"
                    value="-"
                    onClick={(e) => this.onSubtractClickEventHandler(e.target.value)}>-</button>

                <button
                    className="btn-number button"
                    value="1"
                    onClick={(e) => onSetNumbers(e.target.value)}>1
                </button>
                <button
                    className="btn-number button"
                    value="2"
                    onClick={(e) => onSetNumbers(e.target.value)}>2
                </button>
                <button
                    className="btn-number button"
                    value="3"
                    onClick={(e) => onSetNumbers(e.target.value)} >3
                </button>
                <button
                    className="btn-operator button"
                    value="+"
                    onClick={(e) => this.onAddClickEventHandler(e.target.value) }>+</button>

                <button
                    className="btn-number"
                    value="0"
                    onClick={(e) => onSetNumbers(e.target.value)}>0
                </button>
                <button
                    className="btn-number"
                    value="."
                    onClick={(e) => onSetNumbers(e.target.value)}>.</button>
                <button
                    className="equals " id="btn-equal"
                    value="="
                    onClick={() => this.onEqualsClickEventHandler() }>=
                </button>

            </div>
        );
    }

}
