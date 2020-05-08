import React, { Component } from 'react'


class InputForm extends Component {

  // Setup state of the form and initial state

  constructor(props) {
    super(props)

    this.initialState = {
      num: '',
      expon: '',
      units: '',
    }

    this.state = this.initialState
  }

  // code for setting the state of num, expon, units whenever a change is made

handleChange = event => {
  const { name, value } = event.target
// The [ ] brackets here are the setState synatx
  this.setState({
    [name]: value,
  })
}

 // Submit button action.  On click, use App.js's handleSubmit to append form
  // data to previous data

  submitForm = () => {
    // handleSubmit appends new data using the current state of the form
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  
    render() {

      const {num, expon,units}=this.state


      return (

        <div>
      <form>


      <label for="num">Number</label>
        <input
          type="number"
          name="num"
          id="num"
          value={num}
          onChange={this.handleChange} 
          autoFocus/>


          <label for="expon">Exponent</label>
        <input
          type="number"
          name="expon"
          id="expon"
          value={expon}
          onChange={this.handleChange} 
          />

          <label for="units">Units </label>
          <select
          name="units"
          id="units"
          value=""
          onChange={this.handleChange}
          >
          <option value=""></option>
          <option value={1}> m </option>
          <option value={1.9*10**(-16)}>GeV</option>
          </select>

      </form>

      <input 
type="button"
value="Submit"
 onClick={this.submitForm}
 />

<input 
type="button"
value={this.state.units}
 />


</div>
      )
    }
    
  }


export default InputForm