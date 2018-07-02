import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class MathOperationsButtons extends React.Component {
    render() {
        return <div className="grid2" >
                <div className="col0">
                    <div className="operations">/</div>
                </div>
                <div className="col1">
                    <div className="operations">*</div>
                </div>

                <div className="col2">
                    <div className="operations">+</div>
                </div>

                <div className="col2">
                    <div className="operations">-</div>
                </div>

                <div className="col2">
                    <div className="operations">^</div>
                </div>
            </div>;
    }
}
