import React, { Component, Fragment } from 'react'
import { Layout, Menu, Icon, Dropdown, Modal, message } from 'antd'
import { RouteConfig } from '../../route'
import { Link, withRouter } from 'react-router-dom'
import AppMain from './AppMain'
import { connect } from 'react-redux'
import { setOpenkeys } from '../../store/action'
import _ from 'lodash'
import Modulecss from './layout.module.scss'
import MyBreadcrumb from './MyBreadcrumb'
import Mylogo from '../../assets/images/BiazfanxmamNRoxxVxka.png'
const { Header, Sider, Content } = Layout
const { SubMenu } = Menu
class Home extends Component {
  constructor(props) {
    super(props)
    const { pathname } = this.props.history.location
    this.state = {
      collapsed: false,
      ownDefaultSelectedKeys: [pathname]
    }
    this.toggle = this.toggle.bind(this)
    this.renderMenuList = this.renderMenuList.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleOpenChange = this.handleOpenChange.bind(this)
    this.MenuIteClick = this.MenuIteClick.bind(this)
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const { pathname } = nextProps.history.location
    if (pathname !== prevState.ownDefaultSelectedKeys[0]) {
      return {
        ownDefaultSelectedKeys: [pathname]
      }
    }
    return null
  }
  toggle() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  renderMenuList(RouteConfig) {
    return RouteConfig.reduce((pre, item) => {
      if (!item.children) {
        pre.push(
          <Menu.Item key={item.path}>
            <Link to={item.path}>
              {item.icon ? <Icon type={item.icon} /> : null}
              <span>{item.name}</span>
            </Link>
          </Menu.Item>
        )
      } else {
        pre.push(
          <SubMenu
            key={item.path}
            title={
              <span>
                {item.icon ? <Icon type={item.icon} /> : null}
                <span>{item.name}</span>
              </span>
            }
          >
            {this.renderMenuList(item.children)}
          </SubMenu>
        )
      }
      return pre
    }, [])
  }
  handleSelect({ item, key, keyPath, selectedKeys, domEvent }) {
    const openKeys = item.props.openKeys
    const { setOpenkeys } = this.props
    setOpenkeys(openKeys)
  }
  handleOpenChange(openKeys) {
    const { setOpenkeys } = this.props
    setOpenkeys(openKeys)
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
    const { ownDefaultSelectedKeys } = this.state
    const { openKeys } = this.props
    return (
      <Fragment>
        <Layout className={Modulecss.layoutContainer}>
          <Sider
            width={256}
            style={{ height: '100vh' }}
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <div className={Modulecss.IconWrapper}>
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                alt=""
              />
              <h1>React通用管理系统</h1>
            </div>
            <Menu
              // key={ownDefaultSelectedKeys}
              onSelect={this.handleSelect}
              onOpenChange={this.handleOpenChange}
              theme="dark"
              mode="inline"
              selectedKeys={ownDefaultSelectedKeys}
              defaultOpenKeys={openKeys}
            >
              {this.renderMenuList(RouteConfig)}
            </Menu>
          </Sider>
          <Layout>
            <Header
              className={Modulecss.HeaderWrapper}
              style={{ background: '#fff', padding: 0 }}
            >
              <Icon
                className={Modulecss.HeaderIcon}
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
              <div className={Modulecss.BreadMeap}>
                <MyBreadcrumb />
              </div>
              <div className={Modulecss.ownInfo}>
                <Dropdown
                  overlay={
                    <Menu onClick={this.MenuIteClick}>
                      <Menu.Item key="1">个人中心</Menu.Item>
                      <Menu.Item key="2">消息推送</Menu.Item>
                      <Menu.Item key="signout">退出登录</Menu.Item>
                    </Menu>
                  }
                >
                  <div className={Modulecss.infoWrapper}>
                    <img src={Mylogo} alt=""></img>
                    <span>李_宇</span>
                  </div>
                </Dropdown>
              </div>
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280
              }}
            >
              <AppMain />
            </Content>
          </Layout>
        </Layout>
      </Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    openKeys: state.Menu
  }
}
const mapDispatchToProps = {
  setOpenkeys
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
)
