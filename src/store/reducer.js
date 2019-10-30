import { combineReducers } from 'redux'

const MenuReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_OPENKEYS':
      return action.openKeys
    default:
      return state
  }
}
const allReducers = combineReducers({
  Menu: MenuReducer
})
export default allReducers
