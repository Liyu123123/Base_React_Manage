import React, { Component, Fragment } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { RouteConfig } from '../../route'
import { Link, withRouter } from 'react-router-dom'
import AppMain from './AppMain'
const { Header, Sider, Content } = Layout
const { SubMenu } = Menu
function findOpenKeys(menuList, pathName) {
  return menuList
    .filter(v => v.children)
    .filter(v => {
      return v.children.find(v => v.path === pathName)
    })
    .map(v => v.path)
}
class Home extends Component {
  constructor(props) {
    super(props)
    const { pathname } = this.props.history.location
    const OpenKeyS = findOpenKeys(RouteConfig, pathname)
    this.state = {
      collapsed: false,
      SelectedKeys: [pathname],
      OpenKeys: OpenKeyS
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  renderMenuList = RouteConfig => {
    return RouteConfig.map(item => {
      return item.children ? (
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
      ) : (
        <Menu.Item key={item.path}>
          <Link to={item.path}>
            {item.icon ? <Icon type={item.icon} /> : null}
            <span>{item.name}</span>
          </Link>
        </Menu.Item>
      )
    })
  }
  render() {
    const { SelectedKeys, OpenKeys } = this.state
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
              theme="dark"
              mode="inline"
              defaultOpenKeys={OpenKeys}
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
export default withRouter(Home)
