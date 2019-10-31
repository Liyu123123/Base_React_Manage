import user from '../store/modules/user'

const env = process.env.NODE_ENV

function hasPermission(value) {
  if (env === 'development') {
    // 开发环境完全放开权限
    return true
  }
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
