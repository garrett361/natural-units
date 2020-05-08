import React, {Component} from 'react'
import InputForm from './InputForm'
import OutputTable from './OutputTable';



class App extends Component {


  state = {
    input: [],
    output: [],
  }

  // Code for handling the submit button and appending new data to input list

handleSubmit = x => {
  this.setState({input:[...this.state.input,x]})
}


  render ()
  {
     return (

       <div className="container">
      <InputForm handleSubmit={this.handleSubmit} /> 
      <OutputTable />
      <h1>{this.input}hi</h1>
      </div>
      )
  }

}




  export default App;
