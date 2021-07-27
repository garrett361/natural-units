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
          Natural Units Convertor
        </h1>

        <p>
          It is standard practice in high-energy physics to use <em>natural units</em> in which \(\hbar=c=k_B=e=1\) and to express all dimensionful quantites in terms of a single unit of one's choosing by using \(\hbar, c,k_B,e\) as conversion factors.
          In the General Relativity community, it's further common to set \(G_N=1\), in which case all quantites can be expressed at unitless numbers.
        </p>

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
