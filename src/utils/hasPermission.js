import user from '../store/modules/user'



function hasPermission(value) {
 
  if (typeof value === 'string') {
    if (user.state.menuArr.includes(value)) {
      return true
    } else {
      return false
    }
  }
  if (typeof value === 'object') {
    if (!value.hasOwnProperty('meta')) {
      return true
    } else {
      if (!value.meta.hasOwnProperty('role')) {
        return true
      } else {
        if (user.state.menuArr.includes(value.meta.role)) {
          return true
        } else {
          return false
        }
      }
    }
  }
}

export default hasPermission
