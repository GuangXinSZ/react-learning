import React from 'react'
import { from } from 'rxjs';

class List extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '1',
      userName: 'sex',
      hobby: [
        {value: '跳舞', enable: false},
        {value: '唱歌', enable: true}
      ]
    }
  }

  inputKeyValue = (e) => {
    // 键盘事件
    if (e.keyCode === 13) {
      this.setState({
        userName: e.target.value
      })
    }
  }

  handleUserName = (e) => {
    this.setState({
      userName: e.target.value
    })
  }

  hanleHobby = (key) => {
    let hobby = this.state.hobby

    hobby[key].enable = !hobby[key].enable
    this.setState({
      hobby: hobby
    })
  }
  render () {
    return (
      <div>
        {/* <input type="text" value={this.state.userName} onKeyUp={this.inputKeyValue}/> */}
        <input type="text" value={this.state.userName} onChange={this.handleUserName} />
        {this.state.userName}
        <from>
          爱好：
          {
            this.state.hobby.map((item, key) => {
              return (
                <div>
                  {item.value}<input type="checkbox" checked={item.enable}  onChange={this.hanleHobby.bind(this, key)}/>
                </div>
              )
            })
          }
        </from>
      </div>
    ) 
  }
}

export default List