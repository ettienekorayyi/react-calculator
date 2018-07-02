import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NumberButtons from './number-buttons';


export default class NumberDisplay extends React.Component {
    render() {
       return <div className="wrapper">
            <div className="display"></div>
            <NumberButtons />
            
       </div>;
    }
}
