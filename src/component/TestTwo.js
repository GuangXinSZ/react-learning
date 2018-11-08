import React from 'react'

class TestTwo extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '2'
    }
  }

  componentDidMount () {
    // 获取url传值
    console.log(this.props.match.params.aid)
  }

  render () {
    return (
      <div>
        { this.state.name }
      </div>
    ) 
  }
}

export default TestTwo