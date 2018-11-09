import React from 'react'
import PropTypes from 'prop-types'
import api from '../../server/api'
import '../../assets/home/home.scss'

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentIndex: null,
      orderList: [],
      selectOrder: null
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
    if (this.state.selectOrder === null) {
      alert("您还未选择任何套餐！")
      return
    }
    this.context.router.history.push('/orderList?id=11')
  }

  switchMeals = (key, item) => {
    this.setState({
      currentIndex: key,
      selectOrder: item
    })
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
                  <li key={key} className={`item ${key === this.state.currentIndex ? 'bg' : ''}`} onClick={this.switchMeals.bind(this, key, item)}>{item.meals}人</li>
                )
              })
            }
          </ul>
        </div>
        <div className="start-order" onClick={this.startOrder}>
          开始点菜
        </div>
      </div>
    )
  }
}

Home.contextTypes = {
  router: PropTypes.object
}

export default Home