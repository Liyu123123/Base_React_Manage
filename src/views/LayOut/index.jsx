import React, { Component, Fragment } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { RouteConfig } from '../../route'
import { Link, withRouter } from 'react-router-dom'
import AppMain from './AppMain'
import { connect } from 'react-redux'
import { setOpenkeys } from '../../store/action'
import _ from 'lodash'
const { Header, Sider, Content } = Layout
const { SubMenu } = Menu
class Home extends Component {
  constructor(props) {
    super(props)
    const { pathname } = this.props.history.location
    this.state = {
      collapsed: false,
      SelectedKeys: [pathname],
      OpenKeys: []
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  renderMenuList = RouteConfig => {
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
  findDefaultOpenKeys = RouteConfig => {
    const path = this.props.location.pathname,
      newOpenKeys = [],
      findKeys = RouteConfig => {
        RouteConfig.forEach(item => {
          path.indexOf(item.path) === 0 && newOpenKeys.push(item.path)
          item.children && findKeys(item.children)
        })
      }
    findKeys(RouteConfig)
    return _.dropRight(newOpenKeys, 1) //去掉OpenKeys数组最后一项
  }
  handleSelect = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    const openKeys = item.props.openKeys
    const { setOpenkeys } = this.props
    setOpenkeys(openKeys)
  }
  handleOpenChange = openKeys => {
    const { setOpenkeys } = this.props
    setOpenkeys(openKeys)
  }
  render() {
    const { SelectedKeys } = this.state
    const { openKeys } = this.props
    return (
      <Fragment>
        <Layout>
          <Sider
            style={{ height: '100vh' }}
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <Menu
              onSelect={this.handleSelect}
              onOpenChange={this.handleOpenChange}
              theme="dark"
              mode="inline"
              defaultOpenKeys={openKeys}
              defaultSelectedKeys={SelectedKeys}
            >
              {this.renderMenuList(RouteConfig)}
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                style={{
                  fontSize: '18px',
                  lineHeight: '64px',
                  padding: '0 24px',
                  cursor: 'pointer'
                }}
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
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
