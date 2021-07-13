import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Button extends React.Component {
  // This class should contain it's id (What the button is)

  render() {
    return (
      <div>
        <button className = "button">Number</button>
      </div>
    );
  } 
}

class Calculator extends React.Component {
  renderCalc(i) {
    return (
      <Button />
    );
  }

  render() {
    return (
      <div className = "calcRow">
        {this.renderCalc(7)}
        {this.renderCalc(8)}
        {this.renderCalc(9)}
        {this.renderCalc('X')}
      </div>
    )
  }

}

ReactDOM.render (
  <Calculator />,
  document.getElementById('root')
);