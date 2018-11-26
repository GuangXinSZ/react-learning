import React from 'react'
import { Menu, Icon, Row, Col } from 'antd'
import {Route, Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Hot from '../hot/Hot'

const SubMenu = Menu.SubMenu

class Index extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  constructor () {
    super()

    this.state = {
      menuList: [
        {title: '首页', isMenu: true, children: [
          {value: 'hello', path: '/home/hot'}
        ]},
        {title: '民警管理', isMenu: false},
        {title: '罪犯管理',  isMenu: false,children: [
        ]},
        {title: '系统配置', isMenu: true, children: [
          {value: '基本查5询'}
        ]}
      ]
    }
  }

  handleClick = (e) => {
    this.context.router.history.push('/home/hot')
    console.log('click ', e)
  }

  render () {
    return (
      <div>
        <Row>
          <Col span={5}>
            <Menu
              onClick={this.handleClick}
              style={{ width: 150 }}
              defaultSelectedKeys={['1']}
              mode="inline"
            >
            {
              this.state.menuList.map((item, index) => {
                if (item.isMenu) {
                  return (
                    <SubMenu key={index} title={<span><Icon type="appstore" /><span>{item.title}</span></span>}>
                      {
                        item.children.map((el, key) => {
                          return (
                            <Menu.Item data-path={el.path} key={key}>{el.value}</Menu.Item>
                          )
                        })
                      }
                    </SubMenu>
                  )
                } else {
                  return (
                    <SubMenu key="sub1" key={index} title={<span><Icon type="appstore" /><span>{item.title}</span></span>}>
                      <Menu.Item>暂无</Menu.Item>
                    </SubMenu>
                  )
                }
              })
            }
            </Menu>
          </Col>
          <Col span={19}>
            <Route path="/home/hot" component={Hot}></Route>
          </Col>
        </Row>
      </div>
    ) 
  }
}

export default Index