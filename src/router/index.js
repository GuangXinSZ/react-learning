import React from 'react'
import { Route } from 'react-router-dom'
import Movie from '../view/Movie/index'

class Router extends React.Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }
  render () {
    return (
      <div>
        <Route path="/home/movie" component={Movie}></Route>
      </div>
    )
  }
}

export default Router