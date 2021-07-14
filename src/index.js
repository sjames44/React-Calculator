import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// class Button extends React.Component {
//   // This class should contain it's id (What the button is)

//   render() {
//     return (
//       <div>
//         <button className = "button">Number</button>
//       </div>
//     );
//   } 
// }

function Button(props) {
  return (
    <button className = "button">{props.value}</button>
  );
}

class Display extends React.Component {
  renderNumber(num) {
    //Display number
  }

  render() {
    //One big gray rectangle ig
    return (
      <div className = "display">
        Number
      </div>
    );
  }
}

class Calculator extends React.Component {
  renderButton(i) {
    return (
      <Button value = {i}/>
    );
  }

  render() {
    return (
      <div>
        <div className = "display">Number</div>

      <div className = "calcRow">
        {this.renderButton('AC')}
        {this.renderButton('+/-')}
        {this.renderButton('%')}
        {this.renderButton('/')}
      </div>
      <div className = "calcRow">
        {this.renderButton(7)}
        {this.renderButton(8)}
        {this.renderButton(9)}
        {this.renderButton('X')}
      </div>
      <div className = "calcRow">
        {this.renderButton(4)}
        {this.renderButton(5)}
        {this.renderButton(6)}
        {this.renderButton('-')}
      </div>
      <div className = "calcRow">
        {this.renderButton(1)}
        {this.renderButton(2)}
        {this.renderButton(3)}
        {this.renderButton('+')}
      </div>
      <div className = "calcRow">
        {this.renderButton(0)}
        {this.renderButton('.')}
        {this.renderButton('=')}
      </div>

      </div>
    )
  }

}

ReactDOM.render (
  <Calculator />,
  document.getElementById('root')
);