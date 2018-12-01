import React from 'react'
import { Route } from 'react-router-dom'
import Hot from '../view/hot/Hot'
import Member from '../view/User/Member'
import OrdinaryMember from '../view/User/OrdinaryMember'
import Movie from '../view/Movie/index'
import Setting from '../view/Setting/index'

class Router extends React.Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }
  render () {
    return (
      <div>
        <Route path="/home/hot" component={Hot}></Route>
        <Route path="/home/member" component={Member}></Route>
        <Route path="/home/ordinarymember" component={OrdinaryMember}></Route>
        <Route path="/home/movie" component={Movie}></Route>
        <Route path="/home/setting" component={Setting}></Route>
      </div>
    )
  }
}

export default Router