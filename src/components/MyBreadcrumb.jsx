import React from 'react'
import { Breadcrumb } from 'antd'
import { withRouter, Link } from 'react-router-dom'
import { RouteConfig } from '../route'

class MyBreadcrumb extends React.Component {
  render() {
    const { location } = this.props
    const pathSnippets = location.pathname.split('/').filter(i => i)
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const path = `/${pathSnippets.slice(0, index + 1).join('/')}`
      if (
        path === '/Base_React_Manage/Dashboard' ||
        path === '/Base_React_Manage'
      ) {
        return []
      }
      return (
        <Breadcrumb.Item key={path}>
          <Link to={path}>{this.produceBreadcrumbItem(path)}</Link>
        </Breadcrumb.Item>
      )
    })
    console.log(extraBreadcrumbItems)
    return (
      <div style={{ display: 'inline-block' }}>
        <Breadcrumb>
          {[
            <Breadcrumb.Item key="/Base_React_Manage/Dashboard">
              <Link to="/Base_React_Manage/Dashboard">首页</Link>
            </Breadcrumb.Item>
          ].concat(extraBreadcrumbItems)}
        </Breadcrumb>
      </div>
    )
  }

  produceBreadcrumbItem = path => {
    let activeBreadName = ''
    const itera = routeList => {
      for (let i = 0; i < routeList.length; i++) {
        if (routeList[i].path === path) {
          activeBreadName = routeList[i].name
        } else {
          if (routeList[i].hasOwnProperty('children')) {
            itera(routeList[i].children)
          }
        }
      }
    }
    itera(RouteConfig)
    return activeBreadName
  }
}

export default withRouter(MyBreadcrumb)
