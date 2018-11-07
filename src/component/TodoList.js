import React from 'react'

class TodoList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      list: []
    }
  }

  addData = async () => {
    let res = this.state.list
    let inputValue = this.refs.title.value

    if (inputValue === '') {
      alert('不能为空')
      return
    }

    await res.push(inputValue)
    this.refs.title.value = ''
    this.setState({
      list: res
    })
  }

  deleteData = (key) => {
    let res = this.state.list
    res.splice(key, 1)
    this.setState({
      list: res
    })
  }

  render () {
    return (
      <div>
        <input ref="title" />
        <button onClick={this.addData}>点击事件</button>
        <ul>
          {
            this.state.list.map((value, key) => {
              return (
                <li key={key}>{value}--<button onClick={this.deleteData.bind(this, key)}>删除</button>--</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default TodoList