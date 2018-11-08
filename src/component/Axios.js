import React from 'react'
import axios from 'axios'

class Axios extends React.Component {
  constructor () {
    super()

    this.state = {
    }
  }

  getDate = () => {
    var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';   //接口后台允许了跨域
    axios.get(api)
    .then((response)=> {
        console.log(response.data.result);
    })
    .catch(function (error) {
        console.log(error)
    })
  }

  componentDidMount () {
    this.getDate()
  }

  render () {
    return (
      <div>
        Axiossss
      </div>
    ) 
  }
}

export default Axios