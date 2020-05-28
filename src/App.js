import React, { Component } from 'react'


// Components
import InputForm from './InputForm'
import OutputTable from './OutputTable';
import Presets from './Presets';


// set of units, all re-expressed in terms of a meters value and a power
//  if meterExponent=1, then the meterValue is the value of 1m in [units]
// if meterExponent=-1, then meterValue is the value of 1m in [units]^{-1}
let unitsSet = [
  {
    units: 'cm',
    meterExponent: 1,
    meterValue: 100,
  },
  {
    units: 'm',
    meterExponent: 1,
    meterValue: 1,
  },
  {
    units: 'km',
    meterExponent: 1,
    meterValue: 1 / 1000,
  },
  {
    units: 's',
    meterExponent: 1,
    meterValue: 3.33 * 10 ** (-9),
  },
  {
    units: 'eV',
    meterExponent: -1,
    meterValue: 5.06 * 10 ** 6,
  },
  {
    units: 'GeV',
    meterExponent: -1,
    meterValue: 5.06 * 10 ** 15,
  },
  {
    units: 'K',
    meterExponent: -1,
    meterValue: 436,
  },
  {
    units: 'g',
    meterExponent: -1,
    meterValue: 1 / (3.52 * 10 ** (-40)),
  },
  {
    units: 'kg',
    meterExponent: -1,
    meterValue: 1 / (3.52 * 10 ** (-43)),
  },
  {
    units: 'ly',
    meterExponent: 1,
    meterValue: 1 / (9.46 * 10 ** 15),
  },
  {
    units: 'pc',
    meterExponent: 1,
    meterValue: 1 / (3.086 * 10 ** 16),
  },
  {
    units: 'Mpc',
    meterExponent: 1,
    meterValue: 1 / (3.086 * 10 ** 22),
  },
];

// preset quantities, all expressed in terms of meters.  preset should equal [number]*m^[meterExponent]
let presetsSet = [
  {
    name: 'Reduced Planck Mass',
    latex: 'M_{p}',
    state: {
      number: 1.28 * 10 ** 34,
      meterExponent: -1,
    }
  },
  {
    name: 'Solar Mass',
    latex: 'M_{\\odot}',
    state: {
      number: 5.89 * 10 ** 72,
      meterExponent: -1,
    }
  }
]


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
  };


  render() {

    let { input, outputUnit } = this.state;

    return (

      <div className="container">
        <h1>
          Natural Units Convertor
      </h1>

        <h3>
          Preset Inputs
      </h3>
        <Presets
          handleSubmit={this.handleSubmit}
          presetsSet={presetsSet} />

        <h3>
          Manual Input
      </h3>
        <InputForm
          handleSubmit={this.handleSubmit}
          unitsSet={unitsSet} />

        <h3>
          Output
      </h3>
        <OutputTable
          input={input}
          unitsSet={unitsSet}
          outputUnit={outputUnit}
          handleReset={this.handleReset}
          handleOutputUnitChange={this.handleOutputUnitChange} />
      </div>
    )
  }

}




export default App;
