import React, { Component, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { RouteConfig } from '../../../../route'
import { Spin } from 'antd'
export default class AppMain extends Component {
  constructor() {
    super()
    this.renderRoute = this.renderRoute.bind(this)
    this.rendereDirect = this.rendereDirect.bind(this)
  }

  renderRoute(routeList) {
    return routeList.map(item => {
      return item.children ? (
        this.renderRoute(item.children)
      ) : (
        <Route
          exact
          key={item.path}
          path={item.path}
          component={item.component}
        ></Route>
      )
    })
  }

  rendereDirect(routeList) {
    const newList = routeList.filter(v => v.redirect)
    let arr = []
    const itera = List => {
      List.forEach(item => {
        if (item.redirect) {
          arr.push(
            <Redirect
              exact
              from={item.path}
              to={item.redirect}
              key={item.path}
            ></Redirect>
          )
        }
        item.children && itera(item.children)
      })
    }

    itera(newList)
    return arr
  }
  render() {
    const isLogin = sessionStorage.getItem('isLogin')
    if (!isLogin) {
      return <Redirect to="/login" />
    } else {
      return (
        <Switch>
          <Redirect from="/" exact to="/Dashboard" />
          {this.rendereDirect(RouteConfig)}
          <Suspense fallback={<Spin />}>
            {this.renderRoute(RouteConfig)}
          </Suspense>
        </Switch>
      )
    }
  }
}
