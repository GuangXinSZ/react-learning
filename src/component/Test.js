import React from 'react'

class Test extends React.Component {
  constructor () {
    super()

    this.state = {
      name: '1'
    }
  }

  render () {
    return (
      <div>
        { name }
      </div>
    ) 
  }
}