import React from 'react'
import { Icon } from 'antd'

import '../../assets/index/header.scss'

export default class Index extends React.Component {
  constructor () {
    super()

    this.state = {

    }
  }

  componentDidMount () {

  }

  render () {
    return (
      <div className="head">
        <div className="left">
          <Icon type="windows"  style={style.iconColor}/>
          后台管理系统
        </div>
        <div className="right" >
          全屏
        </div>
      </div>
    ) 
  }
}

const style = {
  bgColor: {background: '#001529', color: 'white'},
  iconColor: { color: '#1890ff', marginRight: '10px' }
}