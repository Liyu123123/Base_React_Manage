import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Login from './views/login/index'
import MyLayout from './views/LayOut/index'
import store from './store/index'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistStore(store)}  >
        <BrowserRouter basename="/floorheat_web">
          <Switch>
            <Route path="/" component={MyLayout} />
            <Route path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
        </PersistGate>
      </Provider>
    )
  }
}
