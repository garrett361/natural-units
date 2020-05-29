import React, { Component } from 'react'


// Components
import InputForm from './InputForm'
import OutputTable from './OutputTable';
import Presets from './Presets';


// set of units, all re-expressed in terms of a meters value and a power
// meterValue and meterExponent determiend by writing 1m=[meterValue]*[units]^[meterExponent]
let unitsSet = [

  {
    units: 'eV',
    meterExponent: -1,
    meterValue: 5.06 * 10 ** 6,
  },
  {
    units: 'keV',
    meterExponent: -1,
    meterValue: 5.06 * 10 ** 9,
  },
  {
    units: 'MeV',
    meterExponent: -1,
    meterValue: 5.06 * 10 ** 12,
  },
  {
    units: 'GeV',
    meterExponent: -1,
    meterValue: 5.06 * 10 ** 15,
  },
  {
    units: 'J',
    meterExponent: -1,
    meterValue: 3.16 * 10 ** 25,
  },
  {
    units: 'K',
    meterExponent: -1,
    meterValue: 436,
  },
  {
    units: 'nm',
    meterExponent: 1,
    meterValue: 10 ** 9,
  },
  {
    units: 'cm',
    meterExponent: 1,
    meterValue: 100,
  },
  {
    units: 'ft',
    meterExponent: 1,
    meterValue: 3.28,
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
    units: 'mi',
    meterExponent: 1,
    meterValue: .000621371192,
  },
  {
    units: 'au',
    meterExponent: 1,
    meterValue: 6.68 * 10 ** (-12),
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
  {
    units: 'b',
    meterExponent: .5,
    meterValue: 1 * 10 ** 14,
  },
  {
    units: 's',
    meterExponent: 1,
    meterValue: 3.33 * 10 ** (-9),
  },
  {
    units: 'days',
    meterExponent: 1,
    meterValue: 3.86 * 10 ** (-14),
  },
  {
    units: 'years',
    meterExponent: 1,
    meterValue: 1.06 * 10 ** (-16),
  },
  {
    units: 'g',
    meterExponent: -1,
    meterValue: 1 / (3.52 * 10 ** (-40)),
  },
  {
    units: 'lb',
    meterExponent: -1,
    meterValue: 1.29 * 10 ** 42,
  },
  {
    units: 'kg',
    meterExponent: -1,
    meterValue: 1 / (3.52 * 10 ** (-43)),
  },
  {
    units: 'ton',
    meterExponent: -1,
    meterValue: 2.58 * 10 ** 45,
  },
  {
    units: 'GN',
    meterExponent: .5,
    meterValue: 6.41 * 10 ** 34,
  }
];


// preset quantities, all expressed in terms of meters.  preset state should equal [number]*m^[meterExponent]
let presetsSet = [
  {
    name: "Hubble's Constant (Planck 2018)",
    latex: 'H_{0}',
    state: {
      number: 7.28 * 10 ** -27,
      meterExponent: -1,
    }
  },
  {
    name: 'Electron mass',
    latex: 'm_{e}',
    state: {
      number: 2.59 * 10 ** 12,
      meterExponent: -1,
    }
  },
  {
    name: 'Proton mass',
    latex: 'm_{p}',
    state: {
      number: 4.75 * 10 ** 15,
      meterExponent: -1,
    }
  },
  {
    name: 'Higgs mass',
    latex: 'm_{H}',
    state: {
      number: 6.33 * 10 ** 17,
      meterExponent: -1,
    }
  },
  {
    name: 'Reduced Planck Mass',
    latex: 'M_{\\rm pl}',
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
  },
  {
    name: 'Fine structure constant',
    latex: '\\alpha',
    state: {
      number: 1 / 137,
      meterExponent: 0,
    }
  }
]


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
          It is standard practice in high-energy physics to use <em>natural units</em> in which \(\hbar=c=k_B=1\) and to express all dimensionful quantites in terms of a single unit of one's choosing by using \(\hbar, c,k_B\) as conversion factors.
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
