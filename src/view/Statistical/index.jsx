import React from 'react'
import Page from '../../component/Pagination'
import { Table } from 'antd'

class Movie extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      totail: 50,
      saleList: [],
      columns: [
        {
          title: '日期',
          dataIndex: 'name'
        },{
          title: '下单笔数',
          className: 'column-money',
          dataIndex: 'money',
        },{
          title: '付款订单',
          dataIndex: 'address',
        },{
          title: '类型订单',
          dataIndex: 'type',
        }
      ]
    }
  }

  fetchData = (params) => {
    console.log(params)
  }

  componentWillMount () {
  }

  render () {
    return (
      <div style={style.content}>
        <div>
          <Table
            columns={this.state.columns}
            dataSource={this.state.saleList}
            bordered
          />,
        </div>
        <Page fetchData={this.fetchData} totail={this.state.totail}></Page>
      </div>
    )
  }
}

const style = {
  content: {padding: '20rpx'}
}

export default Movie