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



class App extends Component {

  state = {
    input: [],
  };

  // Code for handling the submit button and appending new data to input list

  handleSubmit = x => {
    this.setState({ input: [...this.state.input, x] })
  }


  render() {

    let { input } = this.state;

    return (

      <div className="container">
        <InputForm handleSubmit={this.handleSubmit} unitsSet={unitsSet} />
        <OutputTable input={input} unitsSet={unitsSet} />
      </div>
    )
  }

}




export default App;
