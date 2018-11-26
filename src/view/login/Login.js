import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import utils from '../../server/utils'
import PropTypes from 'prop-types'
// import { browserHistory } from 'react-router'
import '../../assets/login/login.scss'

const FormItem = Form.Item

class Login extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  constructor () {
    super()

    this.state = {
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let res = await utils.checkFrom(this.props.form)
      if (res) {
        console.log('123')
        this.context.router.history.push('/home')
      }

      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  render () {
    const { getFieldDecorator } = this.props.form

    return (
      <div className="login">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <h5 className="title">电影后台管理系统</h5>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入您的用户名!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入您的密码!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住密码</Checkbox>
            )}
            <a className="login-form-forgot" href="/">忘记密码</a>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }} className="login-form-button">
              登陆
            </Button>
          </FormItem>
        </Form>
      </div>
    ) 
  }
}

const LoginForm = Form.create()(Login)

export default LoginForm