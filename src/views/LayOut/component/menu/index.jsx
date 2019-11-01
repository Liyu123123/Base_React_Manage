import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setOpenkeys } from '../../../../store/action'
import _ from 'lodash'
import Modulecss from './menu.module.scss'
const { SubMenu } = Menu
class MenuComponent extends Component {
  constructor(props) {
    super(props)
    const { pathname } = this.props.history.location
    this.state = {
      ownDefaultSelectedKeys: [pathname]
    }
    this.renderMenuList = this.renderMenuList.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleOpenChange = this.handleOpenChange.bind(this)
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
  renderMenuList(RouteConfig) {
    const { AuthList } = this.props
    return RouteConfig.reduce((pre, item) => {
      if (AuthList.includes(item.role)) {
        if (!_.isEmpty(item.children)) {
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
        } else {
          pre.push(
            <Menu.Item key={item.path}>
              <Link to={item.path}>
                {item.icon ? <Icon type={item.icon} /> : null}
                <span>{item.name}</span>
              </Link>
            </Menu.Item>
          )
        }
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
  render() {
    const { RouteConfig, openKeys } = this.props
    const { ownDefaultSelectedKeys } = this.state
    return (
      <div className={Modulecss.menuWrapper}>
        <div className={Modulecss.IconWrapper}>
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            alt=""
          />
          <h1>React通用管理系统</h1>
        </div>
        <Menu
          onSelect={this.handleSelect}
          onOpenChange={this.handleOpenChange}
          theme="dark"
          mode="inline"
          selectedKeys={ownDefaultSelectedKeys}
          defaultOpenKeys={openKeys}
        >
          {this.renderMenuList(RouteConfig)}
        </Menu>
      </div>
    )
  }
}

MenuComponent.prototypes = {
  RouteConfig: PropTypes.array.isRequired
}
const mapStateToProps = state => {
  return {
    openKeys: state.Menu,
    AuthList: state.auth
  }
}
const mapDispatchToProps = {
  setOpenkeys
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MenuComponent)
)
