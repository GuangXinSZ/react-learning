import React, { Component } from 'react'
import Home from './component/Home'
// import News from './component/News'
// import List from './component/List'
// import TodoList from './component/TodoList'

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Home></Home>
        </header>
      </div>
    )
  }
}

export default App
