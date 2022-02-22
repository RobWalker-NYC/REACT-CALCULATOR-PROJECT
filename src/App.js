
import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
       displayNum: '',
       operation: '',
       numA: '',
       numB: ''
    }
  }

  handleClickPad = (evnt) => {
     this.setState({ 
      displayNum:this.state.displayNum + evnt.target.value, 
      numA: this.state.displayNum + evnt.target.value 

    })
  }

  handleOperation = (evnt) => {
   this.setState({
     operation: evnt.target.value,
     numB: this.state.numA,
     displayNum: ''
    })
  } 

  handleAllClear = () => {
    this.setState({
      displayNum: '',
      operation: ''
    })
 }
 
 handlePosNeg = () => {
   this.setState({
     displayNum: this.state.displayNum * -1
   })
 }
 
 handlePercent = () => {
  this.setState ({
    displayNum: Math.round(this.state.displayNum) / 100

     })
 }

handleProcess = () => {
  if (this.state.operation === '/'){
    this.setState({
      displayNum: Math.round(Number(this.state.numB) / Number(this.state.numA))
    })
  } else if (this.state.operation === '*'){
    this.setState({
      displayNum: Math.round(Number(this.state.numB) * Number(this.state.numA))
    })
} else if (this.state.operation === '-'){
  this.setState({
    displayNum: Math.round(Number(this.state.numB) - Number(this.state.numA))
    })
} else if (this.state.operation === '+'){
  this.setState({
    displayNum: Math.round(Number(this.state.numB) + Number(this.state.numA))
    })
 }
}
  render() { 
    return (
      <div className ='App'>
        <div className='body'>
            <div className='keyBoard'>
             <div id='displayAnswer' value={this.state.displayNum}>{this.state.displayNum}</div>
                 <button id='allClear' value='AC' onClick={this.handleAllClear}>{this.state.allClear}AC</button>
                 <button id='posNeg' value='+/-' onClick={this.handlePosNeg}>+/-</button>
                 <button id='percent' value='%' onClick={this.handlePercent}>%</button>
                 <button id='div' value='/' onClick={this.handleOperation}>÷</button>

                 <button id='seven' value='7' onClick={this.handleClickPad}>7</button>
                 <button id='eight' value='8' onClick={this.handleClickPad}>8</button>
                 <button id='Nine' value='9' onClick={this.handleClickPad}>9</button>
                 <button value='*' id='mult' onClick={this.handleOperation}>x</button>

                 <button id='four' value='4' onClick={this.handleClickPad}>4</button>
                 <button id='five' value='5' onClick={this.handleClickPad}>5</button>
                 <button id='six' value='6' onClick={this.handleClickPad}>6</button>
                 <button value='-' id='subtract' onClick={this.handleOperation}>-</button>

                 <button id='one' value='1' onClick={this.handleClickPad}>1</button>
                 <button id='two' value='2' onClick={this.handleClickPad}>2</button>
                 <button id='three' value='3' onClick={this.handleClickPad}>3</button>
                 <button value='+' id='add' onClick={this.handleOperation}>+</button>

                 <button value='0' id='zero'onClick={this.handleClickPad}>0</button>
                 <button value='0' id='zero'onClick={this.handleClickPad}>0</button>
                 <button value='.' id='decPoint' onClick={this.handleClickPad}>.</button> 
                 <button value='=' id='equal' onClick={this.handleProcess}>=</button> 
              
            </div>
          </div>
      </div>
  );
 }
}
export default App;
