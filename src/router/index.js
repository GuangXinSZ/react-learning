import React from 'react'
import { Route } from 'react-router-dom'
import Totail from '../view/Statistical/index.jsx'
import MenberManage from '../view/MemberManage/Member/index'
import ReflectAdmin from '../view/MemberManage/ReflectAdmin/index'
import AdminList from '../view/Admin/AdminList/index'
import Operation from '../view/Admin/OperationPage/index'
import Country from '../view/AdminProduct/Country/index'
import Cageory from '../view/AdminProduct/Cageory/index'
import Product from '../view/AdminProduct/Product/index'
import Inventory from '../view/AdminProduct/Inventory/index'
import OrderList from '../view/AdminOrder/OrderList/index'
import Service from '../view/AdminOrder/Service/index'
import Invioce from '../view/AdminOrder/Invoice/index'


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
        {/* 管理员管理 */}
        <Route path="/home/admin/admin" component={AdminList}></Route>
        <Route path="/home/admin/operation" component={Operation}></Route>
        {/* 会员管理 */}
        <Route path="/home/membermanage/member" component={MenberManage}></Route>
        <Route path="/home/membermanage/reflect" component={ReflectAdmin}></Route>
        {/* 产品管理 */}
        <Route path="/home/product/country" component={Country}></Route>
        <Route path="/home/product/cageory" component={Cageory}></Route>
        <Route path="/home/product/product" component={Product}></Route>
        <Route path="/home/product/inventory " component={Inventory }></Route>
        {/* 订单管理 */}
        <Route path="/home/order/order" component={OrderList}></Route>
        <Route path="/home/order/service" component={Service}></Route>
        <Route path="/home/order/invioce" component={Invioce}></Route>
      </div>
    )
  }
}

export default Router