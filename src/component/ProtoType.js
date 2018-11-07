import React from 'react'
import PropTypes from 'prop-types'

class ProtoType extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '测试'
    }
  }

  render () {
    return (
      <div>
        { this.state.name }
        { this.props.num }
      </div>
    ) 
  }
}
// 定义传送类型
ProtoType.PropTypes = {
  num: PropTypes.number
}

export default ProtoType