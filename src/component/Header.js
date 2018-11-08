import React, { Component } from 'react'

export default class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  handleOut = (value) => {
    this.props.news.getChildrenData(value)
  }

  render() {
    return (
      <div>
        { this.props.title }
        <button onClick={this.props.run}>1111111111</button>
        {/* 两种方法 */}
        <button onClick={this.handleOut.bind(this, '222')}>传值回父组件</button>
        <button onClick={this.props.news.getChildrenData.bind(this, '222')}>传值回父组件</button>
        <br></br>
        这是一个头部组件
      </div>
    )
  }
}