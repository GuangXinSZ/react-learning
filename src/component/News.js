import React from 'react'

class News extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: '2017/10/1'
    }
  }

  render () {
    return (
      <div>
        <li>{ this.state.data }</li>
      </div>
    )
  }
}

export default News