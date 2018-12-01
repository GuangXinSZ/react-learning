import React from 'react'
import { Menu, Icon, Tag } from 'antd'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Head from '../header/Index'
import Router from '../../router/index'
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
          title: '首页',
          icon: 'github',
          isMenu: true,
          children: [
            {id: 1, value: '影片统计', path: '/home/hot'}
          ]
        },
        {
          title: '用户',
          icon: 'user', 
          isMenu: true,
          children: [
              {id: 2, value: '会员用户', path: '/home/member'},
              {id: 3, value: '普通用户', path: '/home/ordinarymember'}
            ]
          },
        {
          title: '电影',
          icon: 'fire',
          isMenu: true,
          children: [
            {id: 4, value: '全部', path: '/home/movie'}
          ]
        },
        {
          title: '基本设置',
          icon: 'setting',
          isMenu: true,
          children: [
            {id: 5, value: '权限设置', path: '/home/setting'}
          ]
        }
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
        <Head></Head>
        <div className="container">
          <div className="left">
            <Menu
              className="menu"
              onClick={this.handleClick}
              style={{ width: 150 }}
              mode="inline"
            >
            {
              this.state.menuList.map((item, index) => {
                if (item.isMenu) {
                  return (
                    <SubMenu key={index} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
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

export default Index