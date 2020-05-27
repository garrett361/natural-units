import React, { Component } from 'react'

// Ramda
import * as R from 'ramda';



let initialState = {
  number: null,
  numberExponent: null,
  units: null,
  unitsExponent: null,
  meterExponent: null,
  meterValue: null,
};

class InputForm extends Component {

  state = initialState;

  // code for setting the state of num, expon, units whenever a change is made

  handleChange = event => {
    let { name, value } = event.target
    // The [ ] brackets here are the setState synatx
    this.setState({
      [name]: value,
    })
  }

  // Special code for units
  handleUnitsChange = event => {
    let { value } = event.target
    // find which  unit was selected
    let unitsIndex = R.findIndex(R.propEq('units', value))(this.props.unitsSet);
    let chosenUnit = this.props.unitsSet[unitsIndex]
    this.setState({
      units: chosenUnit.units,
      meterExponent: chosenUnit.meterExponent,
      meterValue: chosenUnit.meterValue,
    })
  }


  render() {

    let { units } = this.state;
    let { handleSubmit, handleReset, handleOutputUnitChange, unitsSet, outputUnit } = this.props;


    // Units options
    let unitsFill = R.map((x) => { return (<option key={x.units} value={x.units}>{x.units}</option>) }, unitsSet);


    return (

      <div>
        <form>


          <label>Number</label>
          <input
            type="number"
            name="number"
            id="number"
            onChange={this.handleChange}
            autoFocus />


          <label>Exponent</label>
          <input
            type="number"
            name="numberExponent"
            id="numberExponent"
            onChange={this.handleChange}
          />

          <label>Units </label>
          <select
            name="units"
            id="units"
            value={units ? units : undefined}
            onChange={this.handleUnitsChange}
          >
            <option value=""></option>
            {unitsFill}
          </select>

          <label>Unit Exponent</label>
          <input
            type="number"
            name="unitsExponent"
            id="unitsExponent"
            onChange={this.handleChange}
          />


          <label>Output Unit </label>
          <select
            name="outputUnit"
            id="outputUnit"
            value={outputUnit ? outputUnit : undefined}
            onChange={handleOutputUnitChange}
          >
            {unitsFill}
          </select>
        </form>

        <input
          type="button"
          value="Submit"
          onClick={() => handleSubmit(
            this.state
          )}
        />
        <input
          type="button"
          value="Reset"
          onClick={() => {
            handleReset();
          }}
        />


      </div>
    )
  }

}


export default InputForm