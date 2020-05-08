// This is the key file which the html page pulls to render the app.  
// index.js searches for the "root" element in the public/index.html file, which is a div, and renders App.js into it

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
  

ReactDOM.render(<App />, document.getElementById('root'))