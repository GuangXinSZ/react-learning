import React from 'react'
import Page from '../../component/Pagination'
import { salePlateInfo, getOrderInfo } from '../../server/api'
import { Table } from 'antd'
import _ from 'lodash'
import moment from 'moment'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

class Movie extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      totail: 50,
      orderInfo: null,
      saleList: [],
      columns: [
        {
          title: '日期',
          key: 'data',
          dataIndex: 'time'
        },{
          title: '下单笔数',
          className: 'column-money',
          dataIndex: 'ordernum',
        },{
          title: '付款订单',
          dataIndex: 'money',
        },{
          title: '类型订单',
          dataIndex: 'statictype',
        }
      ]
    }
  }

  fetchData = async (params) => {
    try {
      let res = await salePlateInfo({
        ps: params.pageSize,
        pn: params.page,
        token: sessionStorage.getItem('access-user')    
      })
      let serverData = res.data.data

      serverData.items = _.map(serverData.items, (item, index) => {
        item.key = index
        item.time = moment(item.time).format('YYYY-MM-DD')
        item.money = item.money / 100
        item.stype === 0 ? item.statictype = "线上订单" : item.statictype = "点单订单"
        return item
      })
      this.setState({
        saleList: serverData.items
      })
      if (serverData.total === undefined) {
        return
      }
  
      this.setState({
        totail: serverData.total
      })
    } catch (err) {
      console.log(err)
    }
  }

  initData = async () => {
    try {
      let res = await getOrderInfo({
        token: sessionStorage.getItem('access-user')
      })
      this.setState({
        orderInfo: res.data.data
      })
      this.canvasPre()
    } catch (err) {
    }
  }

  async componentWillMount () {
    await this.initData()
  }
  canvasPre = () => {
    let  myChart = echarts.init(document.getElementById('main'))
    let info = this.state.orderInfo
    myChart.setOption({
      series : [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          roseType: 'angle',
          itemStyle: {
            shadowBlur: 40,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          data:[
            {value: info.sevenOrderCount, name: `7天下单总数${info.sevenOrderCount}`},
            {value: 310, name: '已支付订单'},
            {value: 335, name: '代付款'},
            {value: 400, name: '代发货'}
          ]
        }
      ]
    })
  }
  componentDidMount() {
  }

  render () {
    return (
      <div style={style.content}>
        <div style={style.left}>
          <div id="main" style={{ width: 600, height: 600 }} ref="pieChart"></div>
        </div>
        <div style={style.Table}>
          <Table
            rowKey="key"
            style={style.tableItem}
            columns={this.state.columns}
            dataSource={this.state.saleList}
            bordered
          />
          <Page ref="page" fetchData={this.fetchData} totail={this.state.totail}></Page>
        </div>
      </div>
    )
  }
}

const style = {
  content: {padding: '20rpx', display: 'flex'},
  left: {padding: '30px',flex: 1},
  tableItem: {width: "40%"},
  Table: {padding: '30px', width: "80%", display: 'flex', flexDirection: 'column', alignItems: "center"}
}

export default Movie