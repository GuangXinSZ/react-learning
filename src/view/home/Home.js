import React from 'react'
import api from '../../server/api'
import _ from 'lodash'
import '../../assets/home/home.scss'

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      orderList: []
    }
  }

  getOrderList = async () => {
    try {
      let res = await api.orderList()
      this.setState({
        orderList: res
      })
    } catch (error) {
      console.log(error, "服务器连接失败")
    }
  }

  startOrder = () => {
  }

  switchMeals = (key) => {
    console.log(key)
  }

  componentDidMount () {
    this.getOrderList()
  }


  render () {
    return (
      <div className="container">
        <div className="header">
          <div className="title">用餐人数</div>
          <div className="include">
            请选择正确的用餐人数，小二马上给您送餐具。
          </div>
        </div>
        <div className="orders">
          <ul className="order-list">
            {
              this.state.orderList.map((item, key) => {
                return (
                  <li key={key} className="item" onClick={this.switchMeals.bind(this, key)}>{item.meals}人</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Home