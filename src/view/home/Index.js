import React from 'react'
import { Menu, Icon, Tag } from 'antd'
import PropTypes from 'prop-types'
import HeaderBrand from '../header/Index'
import Router from '../../router/index'
import _ from 'lodash'
import '../../assets/home/home.scss'

const SubMenu = Menu.SubMenu

class Index extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      historyList: [],
      isShowEnable: true,
      isEnable: false,
      menuList: [
        {
          title: '统计',
          icon: 'stock',
          isMenu: true,
          children: [
            {id: 1, value: '全部', path: '/home/totail'}
          ]
        },
        {
          title: '管理员管理',
          icon: 'twitter',
          isMenu: true,
          children: [
            {id: 1 + 'p', value: '管理员列表', path: '/home/admin/admin'},
            {id: 2 + 'p', value: '操作日志', path: '/home/admin/operation'},
          ]
        },
        {
          title: '会员管理',
          icon: 'user-delete',
          isMenu: true,
          children: [
            {id: 2, value: '会员管理', path: '/home/membermanage/member'},
            {id: 3, value: '提现管理', path: '/home/membermanage/reflect'}
          ]
        },
        {
          title: '产品管理',
          icon: 'shopping',
          isMenu: true,
          children: [
            {id: 1 + 'a', value: '国家管理', path: '/home/product/country'},
            {id: 2 + 'a', value: '分类管理', path: '/home/product/cageory'},
            {id: 3 + 'a', value: '产品管理', path: '/home/product/product'},
            {id: 4 + 'a', value: '库存管理', path: '/home/product/inventory'},
          ]
        },
        // {
        //   title: '订单管理',
        //   icon: 'wallet',
        //   isMenu: true,
        //   children: [
        //     {id: 4, value: '全部', path: '/home/movie'}
        //   ]
        // },
        // {
        //   title: '网站设置',
        //   icon: 'tool',
        //   isMenu: true,
        //   children: [
        //     {id: 4, value: '全部', path: '/home/movie'}
        //   ]
        // },
        // {
        //   title: '商城管理',
        //   icon: 'gateway',
        //   isMenu: true,
        //   children: [
        //     {id: 4, value: '全部', path: '/home/movie'}
        //   ]
        // }
      ]
    }
  }

  handleClick = (e) => {
    if (e.item.props.path === undefined) { return }

    let enable = true
    let res = e.item.props.children

    // 跳转路由
    this.context.router.history.push(e.item.props.path)

    // 第一次添加不需要循环
    if (this.state.historyList != null) {
      let ret = _
        .chain(this.state.historyList)
        .map((o) => {
          return o.title
        })
        .includes(res)
        .value()

      if (ret) {
        enable = false
      }
    }

    if (!enable) { return }
    let list = this.state.historyList

    list.push({ title: res, path: e.item.props.path })

    this.setState({
      historyList: list,
      isShowEnable: true
    })

    enable = true
    // 添加
    localStorage.setItem('histhist_key', JSON.stringify(list))
  }

  deleteTag = (item, e) => {
    e.preventDefault()
    if (this.state.historyList.length === 1) {
      return
    }

    let list = _.without(this.state.historyList, item)
    this.setState({
      historyList: list
    })
    // 删除
    localStorage.setItem('histhist_key', JSON.stringify(list))
  }

  jump = (item, e) => {
    this.context.router.history.push(item.path)
  }

  componentWillMount () {
    let res = localStorage.getItem('histhist_key') || null
    let historyList = JSON.parse(res)

    // 首次进来不能null 为null就不需要判断是否可添加
    if (historyList === null) {
      this.setState({
        isShowEnable: false
      })
      return
    }

    this.setState({
      historyList: historyList,
      isShowEnable: true
    })
  }

  render () {
    const tagList = this.state.historyList.map((item, index) => {
      return (
        <Tag 
          closable
          onClick={this.jump.bind(this, item)} 
          key={index} 
          onClose={this.deleteTag.bind(this, item)}>
          {item.title}
        </Tag>
        )
      })

    return (
      <div>
        <HeaderBrand></HeaderBrand>
        <div className="container" >
          <div className="left">
            <Menu
              className="menu"
              onClick={this.handleClick}
              mode="inline"
              theme="dark"
              style={ style.headerTitle }
            >
            {
              this.state.menuList.map((item, index) => {
                if (item.isMenu) {
                  return (
                    <SubMenu key={index} title={<span><Icon type={item.icon} style={style.iconColor} /><span>{item.title}</span></span>}>
                      {
                        item.children.map((el, key) => {
                          return (
                            <Menu.Item path={el.path} key={el.id}>{el.value}</Menu.Item>
                          )
                        })
                      }
                    </SubMenu>
                  )
                } else {
                  return (
                    <SubMenu key={index} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
                      <Menu.Item>暂无</Menu.Item>
                    </SubMenu>
                  )
                }
              })
            }
            </Menu>
          </div>
          <div className="right">
            {this.state.isShowEnable ? tagList : ''}
            <Router></Router>
          </div>
        </div>
      </div>
    ) 
  }
}

const style = {
  headerTitle: { width: '170px' },
  iconColor: { color: '#1890ff' }
}

export default Index