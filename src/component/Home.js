import React from 'react'
import Header from './Header'
import ProtoType from './ProtoType'
import '../assets/css/home.css'

class Home extends React.Component {
  constructor () {
    super()

    this.state = {
      list: ['111', '222', '333'],
      num: '22',
      name: 'LiuGuangXin',
      title: '新闻页',
      recoredList: [
        {title: '1'},
        {title: '12'},
        {title: '13'}
      ]
    }
  }

  recoredDetail () {
    alert(this.state.name)
  }

  persionDel = () => {
    alert(this.state.name)
  }

  setName = (str) => {
    this.setState({
      name: str
    })
  }

  inputChange = (e) => {
    console.log(e.target.value)
    this.setState({
      name: e.target.value
    })
  }

  getChildrenData = (res) => {
    // 接受子组件的参数
    console.log(res)
    this.setState({
      name: res
    })
  } 

  btnClick = () => {
    alert('hello')
  }

  render () {
    let listResult = this.state.list.map((value, key) => {
      return <li key={key}>{value}</li>
    })

    return (
      <div>
        <div>{this.state.name}</div>
        <ul>
          { listResult }
        </ul>
        <button onClick={this.persionDel}>点击</button>
        <button onClick={this.setName.bind(this, 'Xin')}>setName</button>
        <ul>
          {
            this.state.recoredList.map((value, key) => {
              return <li key={key} onClick={this.recoredDetail.bind(this)}>{value.title}</li>
            })
          }
        </ul>
        <input onChange={this.inputChange}></input>
        {/* 引入组件 传方法类似Vue*/}
        <Header title={this.state.title} run={this.btnClick} news={this}></Header>
        <ProtoType num={this.state.num}></ProtoType>
      </div>
    )
  }
}

export default Home