import React, { Component, Fragment } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { RouteConfig } from '../../route'
import { Link, withRouter } from 'react-router-dom'
import AppMain from './AppMain'
import _ from 'lodash'
const { Header, Sider, Content } = Layout
const { SubMenu } = Menu
let arr = []
function findOpenKeys(menuList, pathName) {
  const saveMenuList = _.cloneDeep(menuList)
  let arr = []
  const itera = (menuList, pathname) => {
    for (let i in menuList) {
      if (menuList[i].hasOwnProperty('children')) {
        for (let k in menuList[i].children) {
          if (menuList[i].children[k].path === pathname) {
            arr.unshift(menuList[i].path)
            // 关键迭代
            itera(saveMenuList, menuList[i].path)
          } else {
            itera(menuList[i].children, pathname)
          }
        }
      }
    }
  }
  itera(menuList, pathName)
  return arr
}
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
          if (path.indexOf(item.path) === 0) {
            newOpenKeys.push(item.path)
          }
          if (item.children) {
            findKeys(item.children)
          }
        })
      }
    findKeys(RouteConfig)
    return _.dropRight(newOpenKeys, 1)
  }
  render() {
    const { SelectedKeys } = this.state
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
              defaultOpenKeys={this.findDefaultOpenKeys(RouteConfig)}
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
