import React, { Component } from 'react';
/* 导入路由  页面重定向 Redirect */
import { BrowserRouter as Router,Route,Link,Prompt,Redirect } from "react-router-dom";

class Home extends Component {
    render(){
        return (
            <div>i am 首页
                <div> { this.props.match.params.id } </div>
            </div>
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
class Hello extends Component{
    render(){
        return (
            <div>
                 i am hello world
            </div>
        )
    }
}
class Info extends Component {
    render(){
        return (
            <div>
                i am info
            </div>
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
                 <div> hello world </div>
                <li><Link to={"/home/" + 123}>首页</Link></li>
                <li><Link to="/other">其它页</Link></li>
                <li><Link to="/info">列表</Link></li>
                <li><Link to="/hello">Hello</Link></li>
                {/* when 代表判断    
                <Prompt  message="123" when={true} />
*/}
            </ul>
            <Route path="/home/:id" component={Home}></Route>
            { /*做了重定向的方法 */ }
            <Route path="/other" component={Other} render={ ()=> <Redirect to="/Info" /> } ></Route>
            <Route path="/info" component={Info}></Route>
            <Route path="/hello" component={Hello}></Route>
      </div>
    </Router>
    );
  }
}

export default Main;
