import React from 'react'
import { Route } from 'react-router-dom'
import Totail from '../view/Statistical/index.jsx'
import MenberManage from '../view/MemberManage/Member/index'
import ReflectAdmin from '../view/MemberManage/ReflectAdmin/index'
import AdminList from '../view/Admin/AdminList/index'
import Operation from '../view/Admin/OperationPage/index'


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
        <Route path="/home/admin/admin" component={AdminList}></Route>
        <Route path="/home/admin/operation" component={Operation}></Route>
        <Route path="/home/membermanage/member" component={MenberManage}></Route>
        <Route path="/home/membermanage/reflect" component={ReflectAdmin}></Route>
      </div>
    )
  }
}

export default Router