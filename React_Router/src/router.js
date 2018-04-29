import React, { Component } from 'react';

/* 导入路由  */
import { BrowserRouter as Router,Route,Link,Promp,Rediect } from "react-router-dom";

class Home extends Component {
    render(){
        return (
            <div>i am 首页</div>
        )
    }
}
class Other extends Component{
    render(){
        return(
            <div>I am其它页</div>
        )
    }
}
class Main extends Component {
  render() {
    return (
    /*react router的简单使用 */
    <Router>
      <div className="App">
            <ul>
                <li><Link to="/home">首页</Link></li>
                <li><Link to="/other">其它页</Link></li>
                <li><Link to="/info">列表</Link></li>
            </ul>
            <Route path="/home" component={Home}></Route>
            <Route path="/other" component={Other} ></Route>
      </div>
    </Router>
    );
  }
}

export default Main;
