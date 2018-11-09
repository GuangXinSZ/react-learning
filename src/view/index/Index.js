import React from 'react'
import {Route, Link} from 'react-router-dom'
import Pastel from '../pastel/Pastel'
import Hot from '../hot/Hot'
import Favorite from '../favorite/Favorite'
import '../../assets/index/index.scss'

class Index extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      menuList: [
        {id: 1, title: '热销榜', url: '/index/hot'},
        {id: 2, title: '点过的菜', url: '/index/'},
        {id: 3, title: '搜你喜欢', url: '/index/favorite'},
      ]
    }
  }

  render () {
    return (
      <div className="container">
        <div className="head">
          <ul className="menu-list">
            {
              this.state.menuList.map((item, key) => {
                return (
                  <li key={key} className="item">
                    <Link to={item.url}>{item.title}</Link>
                  </li>
                )
              })
            }
          </ul>
          <div className="router">
            <Route path="/index/hot" component={Hot}></Route>
            <Route exact path="/index/" component={Pastel}></Route>
            <Route path="/index/favorite" component={Favorite}></Route>
          </div>
        </div>
      </div>
    ) 
  }
}

export default Index