import React, { Component } from 'react'


// Ramda
import * as R from 'ramda';

// Components
import InputForm from './InputForm'
import OutputTable from './OutputTable';


// set of units, all re-expressed in terms of a meters value raised to a power
let unitsSet = [
  {
    units: 'm',
    meterExponent: 1,
    meterValue: 1,
  },
  {
    units: 'GeV',
    meterExponent: -1,
    meterValue: 1.97 * 10 ** (-16),
  }
];


let initialState = {
  input: [],
  outputUnit: 'm',
};

class App extends Component {

  state = initialState;

  // Code for handling the submit button and appending new data to input list

  handleSubmit = (x) => {
    this.setState({ input: [...this.state.input, x] });
  };

  handleReset = () => {
    this.setState(initialState);
  };

  handleOutputUnitChange = (event) => {
    let { value } = event.target
    this.setState({ outputUnit: value });
    console.log(value);
  };


  render() {

    let { input, outputUnit } = this.state;

    return (

      <div className="container">
        <InputForm
          handleSubmit={this.handleSubmit
          } handleReset={this.handleReset}
          handleOutputUnitChange={this.handleOutputUnitChange}
          unitsSet={unitsSet} />
        <OutputTable
          input={input}
          unitsSet={unitsSet}
          outputUnit={outputUnit} />
      </div>
    )
  }

}




export default App;
