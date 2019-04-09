import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './view/login/Login'
import Home from './view/home/Index'

class App extends Component {
  render () {

    return (
      <div className="list">
        <Router>
          <header>
            <Route exact path="/" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
          </header>
        </Router>
      </div>
    )
  }
}

export default App
