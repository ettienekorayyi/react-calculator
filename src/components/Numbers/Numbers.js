import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class NumberButtons extends React.Component {
    constructor(props) {
        super(props);


    }

    // Grid Container

    render() {
        return (
            <div className="numbers">
                <button className="btn-number button">C</button>
                <button className="btn-number button">B</button>
                <button className="btn-number button">%</button>
                <button className="btn-operator button">/</button>

                <button className="btn-number button">7</button>
                <button className="btn-number button">8</button>
                <button className="btn-number button">9</button>
                <button className="btn-operator button">*</button>

                <button className="btn-number button">4</button>
                <button className="btn-number button">5</button>
                <button className="btn-number button">6</button>
                <button className="btn-operator button">-</button>

                <button className="btn-number button">1</button>
                <button className="btn-number button">2</button>
                <button className="btn-number button">3</button>
                <button className="btn-operator button">+</button>

                <button className="btn-number">0</button>
                <button className="btn-number">.</button>
                <button className="equals" id="btn-equal">=</button>
                
            </div>
        );
    }

}
