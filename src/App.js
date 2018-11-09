import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './view/home/Home'
import Index from './view/index/Index'

class App extends Component {
  render () {
    return (
      <div className="list">
        <Router>
          <header>
            <Route exact path="/" component={Home}></Route>
            <Route path="/index/" component={Index}></Route>
          </header>
        </Router>
      </div>
    )
  }
}

export default App
