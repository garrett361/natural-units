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
    let unitsIndex=R.findIndex(R.propEq('units', value))(this.props.unitsSet);
    let chosenUnit=this.props.unitsSet[unitsIndex]
    this.setState({
      units: chosenUnit.units,
      meterExponent: chosenUnit.meterExponent,
      meterValue: chosenUnit.meterValue,
    })
  }


  render() {

    let { number, numberExponent, unitsExponent, units } = this.state;
    let { handleSubmit, unitsSet } = this.props;


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

        </form>

        <input
          type="button"
          value="Submit"
          onClick={() => handleSubmit(
            this.state
          )}
        />


      </div>
    )
  }

}


export default InputForm