import React from 'react'
import { Icon, Tooltip } from 'antd'

import '../../assets/index/header.scss'

export default class Index extends React.Component {
  constructor () {
    super()

    this.state = {
      title: '全屏',
      fullscreen: false
    }
  }

  // 全屏点击触发事件
  handleFullScreen = () => {
    let { fullscreen } = this.state
    let element = document.documentElement

    if (fullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    } else {
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      }
    }

    this.setState({
      fullscreen: !fullscreen
    })
  }

  componentDidMount () {

  }

  render () {
    return (
      <div className="head">
        <div className="left">
          <Icon type="windows"  style={style.iconColor}/>
          商户管理系统
        </div>
        <div className="right">
          <div style={style.flexSetting}>
            <Tooltip placement="topLeft" title={this.state.title} overlayStyle={style.cart} onClick={this.handleFullScreen}>
              <Icon type="fullscreen" style={style.iconColor}/>
            </Tooltip>
            <div>
              {/* 2 */}
            </div>
          </div>
        </div>
      </div>
    ) 
  }
}

const style = {
  bgColor: { background: '#001529', color: 'white' },
  iconColor: { color: '#1890ff', marginRight: '12px', fontSize: '20px' },
  flexSetting: { display: 'flex' },
  cart: { color: 'red' }
}