import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NumberButtons from './number-buttons';

export default class DisplayNumbers extends React.Component {
    constructor(props) {
        super(props);
        alert("Display Numbers: " + props.result);
    }
    render() {
        return <div className="wrapper">
            <div className="display">
                
            </div>
            <NumberButtons />
        </div>;
    }
}
