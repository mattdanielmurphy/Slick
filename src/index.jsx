// Application entrypoint.

// Load application styles
require('../styles/application.scss')

// Render the top-level React component
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'

// Render the DOM with React
ReactDOM.render(<App />, document.getElementById('react-root'))