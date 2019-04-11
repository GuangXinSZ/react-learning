import React from 'react'
import Page from '../../component/Pagination'

class Movie extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      totail: 50
    }
  }

  fetchData = (params) => {
    console.log(params)
  }

  componentWillMount () {
  }

  render () {
    return (
      <div>
        <Page fetchData={this.fetchData} totail={this.state.totail}></Page>
      </div>
    )
  }
}

export default Movie