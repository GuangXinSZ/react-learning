import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './view/home/Home'

class App extends Component {
  render () {
    return (
      <div className="list">
        <Router>
          <Route exact path="/" component={Home}></Route>
        </Router>
      </div>
    )
  }
}

export default App
