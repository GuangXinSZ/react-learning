import React, { Component } from 'react'
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

// import Test from './component/Test'
// import TestTwo from './component/TestTwo'
// import Home from './component/Home'
// import News from './component/News'
// import List from './component/List'
// import TodoList from './component/TodoList'
import './assets/home.scss'

class App extends Component {
  render () {
    return (
      <div className="list">
        hello world
      </div>
      // <Router>
      //   react-router使用方式
      //   <div className="App">
      //   <Link to="/">首页</Link>
      //   <Link to="/TestTwo">跳转</Link>
      //     <header className="App-header">
      //       <Route exact path="/" component={Test}></Route>
      //       <Route path="/TestTwo/:aid" component={TestTwo}></Route>
      //     </header>
      //   </div>
      // </Router>
    )
  }
}

export default App
