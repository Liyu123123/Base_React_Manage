import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import Login from './views/login/index'
import MyLayout from './views/LayOut/index'
import store from './store/index'
import NotFound from './components/NotFound'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
// useHistory，useLocation，useParams，useRouteMatch
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistStore(store)}>
          <BrowserRouter>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/Base_React_Manage" component={MyLayout} />
              <Redirect
                exact
                from="/"
                to="/Base_React_Manage/Dashboard"
              ></Redirect>
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    )
  }
}
