import { MessageBox, Message } from 'element-ui'

const warnConfirm = (text = '提示', sucFn = false, failFn = false) => {
  MessageBox.confirm(text, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    if (sucFn) {
      sucFn()
    }
  }).catch(() => {
    Message({
      type: 'info',
      message: '取消'
    })
    if (failFn) {
      failFn()
    }
  })
}
export default warnConfirm
