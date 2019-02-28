import React, { Component } from "react";
import {Clear, NumberKeys, Operators} from './components'
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      calcValue: 0, 
      firstNum: null, 
      secondNum: null, 
      operator: null,
      lastSelected: null
    };
  };

  //append number to current calc value
  pushNumber(n) {
    n === "." ? this.setState({lastSelected: n, calcValue: this.state.calcValue +n.toString()}) : this.setState({lastSelected: n, calcValue: Number(this.state.calcValue +n.toString())})
  };

  //decision operator
  setOper(o){
    this.setState({firstNum: this.state.calcValue, operator: o, calcValue: 0})   
  };

  //reset app state
  clearCalc() {
    this.setState({
      calcValue: 0, 
      firstNum: null, 
      secondNum: null, 
      operator: null,
      lastSelected: null
      });
    };
  
  //do calculation
  handleEqual() {
    this.setState({secondNum: this.state.calcValue})
    switch(this.state.operator){
      case "+":
        this.setState({calcValue: Number(this.state.firstNum)+Number(this.state.calcValue), lastSelected: null})
        break;
      case "-":
        this.setState({calcValue: Number(this.state.firstNum)-Number(this.state.calcValue), lastSelected: null})
        break;
      case "x":
        this.setState({calcValue: Number(this.state.firstNum)*Number(this.state.calcValue), lastSelected: null})
        break;
      case "/":
        this.setState({calcValue: Number(this.state.firstNum)/Number(this.state.calcValue), lastSelected: null})
        break;
     default:
        this.setState({calcValue: "Error"})
    };
  };
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="calc">
            <div className="calc-top">{this.state.calcValue}</div>
            <div className="nums">
            <NumberKeys 
              lastSelected={this.state.lastSelected} 
              pushNumber={(n) => this.pushNumber(n)} 
              doCalc={() => this.handleEqual()}
            />
            <Operators  op={this.state.operator} setOper={(o) => this.setOper(o)}/>
            <Clear clear={() => this.clearCalc()}/>
          </div>
          </div>
        </header>
      </div>
    );
  };
};

export default App;
