import React, { Component } from 'react'

// Ramda
import * as R from 'ramda';



let initialState = {
  number: null,
  units: null,
  unitsExponent: 0,
  meterExponent: null,
  meterValue: null,
  overallExponent: 1,
};

class InputForm extends Component {

  state = initialState;

  // code for handling changes

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

    let { number, units, unitsExponent, overallExponent } = this.state;
    let { handleSubmit, unitsSet } = this.props;


    // Units options
    let unitsFill = R.map((x) => { return (<option key={x.units} >{x.units}</option>) }, unitsSet);


    return (

      <div>
        <form>


          <label>Number</label>
          <input
            type="number"
            name="number"
            id="number"
            value={number || ''}
            onChange={this.handleChange}
            autoFocus />



          <label>Units </label>
          <select
            name="units"
            id="units"
            value={units || ''}
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
            value={unitsExponent || ''}
            onChange={this.handleChange}
          />

          <label>Overall Exponent</label>
          <input
            type="number"
            name="overallExponent"
            id="overallExponent"
            value={overallExponent}
            onChange={this.handleChange}
          />

        </form>

        <input
          type="button"
          value="Submit"
          onClick={() => {
            if (number && Number(overallExponent)!==0) {
              handleSubmit(
                this.state
              );
              this.setState(initialState);
            }
            else {
              alert('Please enter a number/non-zero overall exponent');
              this.setState(initialState);
            }
          }
          }
        />
        <input
          type="button"
          value="Clear"
          onClick={() => {
            this.setState(initialState);
          }}
        />


      </div>
    )
  }

}


export default InputForm