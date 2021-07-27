import React, { Component } from 'react'


// Components
import InputForm from './InputForm'
import OutputTable from './OutputTable';
import Presets from './Presets';

// Importing units and presets
import unitsSet from './data/unitsSet'
import presetsSet from './data/presetsSet'


let initialState = {
  input: [],
  outputUnit: 'm',
  GNis1: false,
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

  handleGNis1Toggle = () => {
    this.setState({
      GNis1: !this.state.GNis1,
    })
    if (this.state.GNis1) {
      this.setState({ outputUnit: 'm' })
    } else { this.setState({ outputUnit: 'GN' }) }
  }


  render() {

    let { input, outputUnit, GNis1 } = this.state;

    return (

      <div className="container">
        <h1>
          <a href="https://garrettgoon.com" target="_blank">Natural Units Convertor - garrettgoon.com</a>
        </h1>

        <p>
          It is standard practice in high-energy physics to use <em>natural units</em> in which
          \(\hbar=c=k_B=1\) and to express all dimensionful quantites in terms of a single unit
          of one's choosing by using the preceding quantities as conversion factors.
          In the General Relativity community, it's further common to set \(G_N=1\), in which case all
          quantites can be expressed at unitless numbers.
        </p>

        <p><b>Example:</b> I weigh about 190lbs \(\approx\) 86.3kg.  Since \(\hbar/c\) has units of kg * m, we
          can divide my weight by this product to find that I weigh about 10e44 inverse-meters. Multiplying instead
           by \(c^{2}/k_B\), I find that I weigh about 10e41 Kelvin.  Finally using units where \(G_N=1\), I find I simply weigh around 10e10.   </p>

        <p>
          The calculator below implements such conversions.
        </p>

        <h3>
          Preset Inputs
        </h3>
        <Presets
          handleSubmit={this.handleSubmit}
          presetsSet={presetsSet} />

        <h3>
          Manual Input
        </h3>
        <p>
          Exponential notation can be used as in 1.23e4 \(=1.23\times 10^{4}\).
        </p>
        <InputForm
          handleSubmit={this.handleSubmit}
          unitsSet={unitsSet} />

        <h3>
          Output
        </h3>
        <OutputTable
          input={input}
          GNis1={GNis1}
          handleGNis1Toggle={this.handleGNis1Toggle}
          unitsSet={unitsSet}
          outputUnit={outputUnit}
          handleReset={this.handleReset}
          handleOutputUnitChange={this.handleOutputUnitChange} />
      </div>
    )
  }

}




export default App;
