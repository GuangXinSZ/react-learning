import React from 'react'
import { Pagination } from 'antd'

class Page extends React.Component{
  constructor (props) {
    super(props)

    this.state = {
      pageSize: this.props.initSize === undefined ? 10 : this.props.initSize,
      page: 1
    }
  }
  // reset 组件
  reset = async () => {
    await this.setState({
      page: 1
    })
    this.fetchDataByPage()
  }

  // 回调父组件的参数
  fetchDataByPage = () => {
    let pageParams = {
      page: this.state.page,
      pageSize: this.state.pageSize
    }
    this.props.fetchData(pageParams)
  }

  // pageSize 改变
  handleSizePage = async (page) => {
    await this.setState({
      page: page
    })
    this.fetchDataByPage()
  }

  // current 变化的回调
  handleCurrentChange = async (current, size) => {
    await this.setState({
      pageSize: size
    })
    this.fetchDataByPage()
  }

  async componentDidMount () {
    await this.fetchDataByPage()
  }

  render () {
    return (
      <div style={style.page}>
        <Pagination 
          size="small"
          total={this.props.totail} 
          pageSize={this.state.pageSize}
          current={this.state.page}
          onChange={this.handleSizePage}
          onShowSizeChange={this.handleCurrentChange}
          showSizeChanger 
          showQuickJumper
        />
      </div>
    )
  }
}

const style = {
  page: {marginTop: '20px'}
}

export default Page