import React from 'react'
import {Link} from 'react-router-dom'

class Test extends React.Component {
  constructor () {
    super()

    this.state = {
      name: '1',
      list: [
        {value: '江西', key: 1}
      ]
    }
  }

  render () {
    return (
      <div>
        <ul>
          {
            this.state.list.map((item, key) => {
              return (
                <li key={key}>
                {/* 动态路由 */}
                  <Link to={`/TestTwo/${item.key}`}>{item.value}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    ) 
  }
}

export default Test