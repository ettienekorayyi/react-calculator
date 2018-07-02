import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MathOperationsButtons from './math-operations-buttons';

export default class NumberButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }
    
    render() {
       return <div className="calculatorGrid">
                <div className="grid1">
                    <div className="col0" >
                        <div className="numbers clear" onClick={(event)=> this.setState(event.target.value)}>C
                        </div>
                        
                    </div> 
                    <div className="col1">
                        <div className="numbers" onClick={(event)=> console.log(event.target.value)}>7</div>
                        <div className="numbers">8</div>
                        <div className="numbers">9</div>
                    </div>

                    <div className="col2">
                        <div className="numbers">6</div>
                        <div className="numbers">5</div>
                        <div className="numbers">4</div>
                    </div>

                    <div className="col2">
                        <div className="numbers">3</div>
                        <div className="numbers">2</div>
                        <div className="numbers">1</div>
                    </div>

                    <div className="col2">
                        <div className="numbers">.</div>
                        <div className="numbers">0</div>
                        <div className="numbers">=</div>
                    </div>
                </div>
                
                <MathOperationsButtons />
            </div>;
    } 

    
}
