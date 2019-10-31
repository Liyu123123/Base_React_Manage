import React, { Component, Fragment } from 'react'
import { Layout } from 'antd'
import { RouteConfig } from '../../route'
import AppMain from './component/appMain'
import Modulecss from './layout.module.scss'
import MenuComponent from './component/menu'
import HeaderComponent from './component/header'
const { Header, Sider, Content } = Layout
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
    this.changeCollpsed = this.changeCollpsed.bind(this)
  }
  changeCollpsed(val) {
    this.setState({
      collapsed: val
    })
  }

  render() {
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
            <MenuComponent RouteConfig={RouteConfig} />
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <HeaderComponent
                collapsed={this.state.collapsed}
                changeCollpsed={this.changeCollpsed}
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

export default Home
