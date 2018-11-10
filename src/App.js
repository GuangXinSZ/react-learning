import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './view/home/Home'
import Index from './view/index/Index'
import {add, remove} from './store/index'

class App extends Component {
  render () {
    const store = this.props.store
    const num = store.getState()

    return (
      <div className="list">
      {num}
      <button onClick={() => store.dispatch(add())}>Add</button>
      <button onClick={() => store.dispatch(remove())}>Remove</button>
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
