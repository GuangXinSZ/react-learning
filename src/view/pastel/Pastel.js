import React from 'react'

class Pastel extends React.Component {
  constructor () {
    super()

    this.state = {
    }
  }

  handleShop = () => {
    console.log('123')
  }

  render () {
    return (
      <div className="container">
       <div className="block">
        <button onClick={this.handleShop}>111</button>
       </div>
      </div>
    ) 
  }
}

export default Pastel