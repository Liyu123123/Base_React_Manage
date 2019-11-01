import React, { Component, Suspense } from 'react'
import { Spin } from 'antd'
import { Route, Switch, Redirect } from 'react-router-dom'
import { RouteConfig } from '../../../../route'
import { connect } from 'react-redux'
import MyLoading from '../../../../components/Loading.jsx'
import NotFound from '../../../../components/NotFound'
import _ from 'lodash'
class AppMain extends Component {
  constructor() {
    super()
    this.renderRoute = this.renderRoute.bind(this)
    this.rendereDirect = this.rendereDirect.bind(this)
  }

  hasAuth(item) {
    const { AuthList } = this.props
    return AuthList.includes(item)
  }
  renderRoute(routeList) {
    let arr = []
    const itera = routeList => {
      routeList.forEach(item => {
        if (this.hasAuth(item.role)) {
          if (!_.isEmpty(item.children)) {
            itera(item.children)
          } else {
            arr.push(
              <Route
                exact
                key={item.path}
                path={item.path}
                component={item.component}
              ></Route>
            )
          }
        }
      })
    }
    itera(routeList)
    return arr
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
        <Suspense fallback={<Spin delay={400} indicator={<MyLoading/>} />}>
          <Switch>
           
            {this.rendereDirect(RouteConfig)}
            {this.renderRoute(RouteConfig)}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      )
    }
  }
}
const mapStateToProps = state => {
  return {
    AuthList: state.auth
  }
}
export default connect(
  mapStateToProps,
  null
)(AppMain)
