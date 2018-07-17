import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import MathOperationsButtons from './math-operations-buttons';

export default class NumberButtons extends React.Component {
    constructor(props) {
        super(props);
        this.isClicked = false;
        this.equal = false;
        this.state = {
            operator: '',
            firstValue: '',
            secondValue: '',
            result: '0'
        };

    }

    addValues = (x, y) => {
        if (x && y) {
            this.setState({ result: Number(x) + Number(y) });
        }
    }

    subtractValues = (x, y) => {
        if (x && y) {
            this.setState({ result: Number(x) - Number(y) });
        }
    }

    divideValues = (x, y) => {
        if (x && y) {
            this.setState({ result: Number(x) / Number(y) });
            alert('divide:'+ this.state.result);
        }
    }

    multiplyValues = (x, y) => {
        if (x && y) {
            this.setState({ result: Number(x) * Number(y) });
        }
    }

    numberSelector(number) {
        if (this.isClicked == false) {
            this.setState({ firstValue: this.state.firstValue + number });
        } else if (this.isClicked == true) {
            this.setState({ secondValue: this.state.secondValue + number });
            this.isClicked = false;
        } else {
            console.log("Please enter a valid number.");
        }
    }
    clearState() {
        this.setState({ operator: '' });
        this.setState({ firstValue: '' });
        this.setState({ secondValue: '' });
        this.setState({ result: '0' });
    }

    executor() {
        if (this.state.operator == '+') {
            this.addValues(this.state.firstValue, this.state.secondValue);
        } else if (this.state.operator == '-') {
            this.subtractValues(this.state.firstValue, this.state.secondValue);
        } else if (this.state.operator == '*') {
            this.multiplyValues(this.state.firstValue, this.state.secondValue);
        } else if (this.state.operator == '/') {
            this.divideValues(this.state.firstValue, this.state.secondValue);
        } else {
            //console.log("Executor error.");
        }
    }

    render() {
        return <div className="wrapper">
            <div className="display">
                <div className="display-box">
                    <h1>{this.state.result}</h1>
                </div>
            </div>
            <div className="calculatorGrid">
                <div className="grid1">
                    <div className="col0" >
                        <div className="numbers clear" onClick={() => this.clearState()}>C</div>
                    </div>
                    <div className="col1">
                        <div className="numbers" onClick={() => this.numberSelector(7)}>7</div>
                        <div className="numbers" onClick={() => this.numberSelector(8)}>8</div>
                        <div className="numbers" onClick={() => this.numberSelector(9)}>9</div>
                    </div>

                    <div className="col2">
                        <div className="numbers" onClick={() => this.numberSelector(6)}>6</div>
                        <div className="numbers" onClick={() => this.numberSelector(5)}>5</div>
                        <div className="numbers" onClick={() => this.numberSelector(4)}>4</div>
                    </div>

                    <div className="col2">
                        <div className="numbers" onClick={() => this.numberSelector(3)}>3</div>
                        <div className="numbers" onClick={() => this.numberSelector(2)}>2</div>
                        <div className="numbers" onClick={() => this.numberSelector(1)}>1</div>
                    </div>

                    <div className="col2">
                        <div className="numbers">.</div>
                        <div className="numbers" onClick={() => this.numberSelector(0)}>0</div>
                        <div className="numbers" onClick={() => {
                            this.equal = true;
                            this.executor();
                        }} >=</div>
                    </div>
                </div>
                <div className="grid2" >
                    <div className="col0">
                        <div className="operations" onClick={() => {
                            this.isClicked = true;
                            this.setState({ operator: '/' });
                        }}>/</div>
                    </div>
                    <div className="col1">
                        <div className="operations" onClick={() => {
                            this.isClicked = true;
                            this.setState({ operator: '*' });
                        }}>*</div>
                    </div>

                    <div className="col2"  >
                        <div className="operations" onClick={() => {
                            this.isClicked = true;
                            this.setState({ operator: '+' });
                            this.executor();
                        }}>+</div>
                    </div>

                    <div className="col2">
                        <div className="operations" onClick={() => {
                            this.isClicked = true;
                            this.setState({ operator: '-' });
                        }}>-</div>
                    </div>

                    <div className="col2">
                        <div className="operations">^</div>
                    </div>

                </div>


                <p>Value of firstValue: {this.state.firstValue} </p>
                <p>Value of secondValue: {this.state.secondValue} </p>
                <p>Value of operator: {this.state.operator} </p>
                <p>Display All: {this.state.result} </p>
            </div>
        </div>;
    }

}
