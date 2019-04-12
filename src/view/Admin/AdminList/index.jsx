import React from 'react'
import { Button, Icon } from 'antd'

class AdminList extends React.Component{
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentWillMount () {
  }

  render () {
    return (
      <div style={style.admin}>
        <div style={style.addAdmin}>
          <Button type="primary"><Icon type="plus" />添加管理员</Button>
        </div>
      </div>
    )
  }
}

const style = {
  admin: {padding: '20px', width: "100%", display: 'flex', flexDirection: 'column', alignItems: "center"},
  addAdmin: {width: '100%', textAlign: 'right'}
}

export default AdminList