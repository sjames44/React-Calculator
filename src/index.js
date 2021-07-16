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
    <button className = "button"
    onClick = {props.onClick}>
      {props.value}</button>
  );
}

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: "",
    };
  }

  render() {
    //One big gray rectangle ig
    return (
      <div className = "display">
        {this.props.value}
      </div>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     b: [], 
    };
  }

  renderButton(i) {
    return (
      <Button value = {i} onClick = {() => this.clickButton(i)} />
    );
  }

  renderDisplay() {
    const size = this.state.b.length;
    return (
      <Display value = { this.state.b[size-1] } />
    )
  }

  clickButton(i) {
    const buttons = this.state.b.slice();
    if (i != '=') {
      buttons.push(i);
    } else {
      //TODO: FIRST CALCULATE BASED ON ARRAY
      buttons.length = 0;
      alert("Calculating...");
    }
    this.setState({b: buttons});
    console.log(i);
  }

  render() {
    return (
      <div>
        {this.renderDisplay()}
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