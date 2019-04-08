import React from 'react'
import { Route } from 'react-router-dom'
import Totail from '../view/Statistical/index.jsx'
import MenberManage from '../view/MemberManage/Member/index'
import ReflectAdmin from '../view/MemberManage/ReflectAdmin/index'

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
        <Route path="/home/membermanage/member" component={MenberManage}></Route>
        <Route path="/home/membermanage/reflect" component={ReflectAdmin}></Route>
      </div>
    )
  }
}

export default Router