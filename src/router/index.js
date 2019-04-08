import React from 'react'
import { Route } from 'react-router-dom'
import Totail from '../view/Statistical/index.jsx'
import MenberManage from '../view/MemberManage/index.jsx'

class Router extends React.Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }
  render () {
    return (
      <div>
        <Route path="/home/totail" component={Totail}></Route>
        <Route path="/home/member" component={MenberManage}></Route>
      </div>
    )
  }
}

export default Router