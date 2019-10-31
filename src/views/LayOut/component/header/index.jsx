import React, { Component } from 'react'
import { Icon, Dropdown, Menu, Modal, message } from 'antd'
import PropTypes from 'prop-types'
import MyBreadcrumb from '../../../../components/MyBreadcrumb'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setOpenkeys } from '../../../../store/action'
import Mylogo from '../../../../assets/images/BiazfanxmamNRoxxVxka.png'
import ModuleCss from './header.module.scss'

class HeaderComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.ChangeCollpse = this.ChangeCollpse.bind(this)
    this.MenuIteClick = this.MenuIteClick.bind(this)
  }
  ChangeCollpse(collapsed) {
    const { changeCollpsed } = this.props
    changeCollpsed(!collapsed)
  }
  MenuIteClick({ key }) {
    switch (key) {
      case 'signout':
        Modal.confirm({
          title: '登出',
          content: '确认登出?',
          okText: '确认',
          cancelText: '取消',
          onOk: () => {
            this.props.history.replace('/login')
            const { setOpenkeys } = this.props
            setOpenkeys([])
            sessionStorage.clear()
            localStorage.clear()
          },
          onCancel: () => {
            message.info('取消登出')
          }
        })
        break
      default:
        return
    }
  }
  render() {
    const { collapsed } = this.props
    return (
      <div className={ModuleCss.headerWrapper}>
        <div className={ModuleCss.trigger}>
          <Icon
            className={ModuleCss.HeaderIcon}
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={() => this.ChangeCollpse(collapsed)}
          />
        </div>
        <div className={ModuleCss.BreadMeap}>
          <MyBreadcrumb />
        </div>
        <div className={ModuleCss.ownInfo}>
          <Dropdown
            overlay={
              <Menu onClick={this.MenuIteClick}>
                <Menu.Item key="1">个人中心</Menu.Item>
                <Menu.Item key="2">消息推送</Menu.Item>
                <Menu.Item key="signout">退出登录</Menu.Item>
              </Menu>
            }
          >
            <div className={ModuleCss.infoWrapper}>
              <img src={Mylogo} alt=""></img>
              <span>李_宇</span>
            </div>
          </Dropdown>
        </div>
      </div>
    )
  }
}
HeaderComponent.prototypes = {
  collapsed: PropTypes.bool.isRequired,
  changeCollpsed: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  setOpenkeys
}
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(HeaderComponent)
)
