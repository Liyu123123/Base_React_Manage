import React, { Fragment } from 'react'
import { Form, Input, Button, Select } from 'antd'

const { Option } = Select

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

const Demo = () => {
  const [form] = Form.useForm()
  return (
    <Form>
      <Form.Item name="username" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
    </Form>
  )
}

export default Demo
// import React, { Component, Fragment } from 'react'
// // import { LockOutlined, UserOutlined } from '@ant-design/icons/lib'
// // import { Form } from '@ant-design/compatible'
// import '@ant-design/compatible/assets/index.css'
// import { Input, Button } from 'antd'
// import LoginCSS from './login.module.scss'
// import { withRouter } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { setAuth } from '../../store/action'
// import loginLogo from '../../assets/images/logo.png'

// class HeatLogin extends Component {
//   constructor() {
//     super()
//     this.state = {
//       name: '',
//       id: ''
//     }
//   }
//   render() {
//     return (
//       <Fragment>
//         <div className={LoginCSS.loginWrapper}>
//           <div className={LoginCSS.header}>
//             <div className={LoginCSS.headerContent}>
//               <img className={LoginCSS.imgStyle} src={loginLogo} alt="" />
//               <span className={LoginCSS.text}>后台管理系统</span>
//             </div>
//           </div>
//           <div className={LoginCSS.body}>
//             <div className={LoginCSS.backLogo}></div>
//             <div className={LoginCSS.loginForm}>
//               <h2 className={LoginCSS.FormTxt}>用户登录</h2>
//               <WrappeNormalLoginForm {...this.props} {...this.state} />
//             </div>
//           </div>
//         </div>
//       </Fragment>
//     )
//   }
// }
// class NormalLoginForm extends React.Component {
//   handleSubmit = (e) => {
//     const { setAuth } = this.props
//     e.preventDefault()
//     this.props.form.validateFields(async (err, values) => {
//       if (!err) {
//         this.props.history.replace('/')
//         sessionStorage.setItem('isLogin', '1')
//         setAuth([
//           '首页',
//           '学校管理',
//           '学校管理-学生管理',
//           '学校管理-学生管理-班级管理',
//           '学校管理-教师管理',
//           '学校管理-教师管理-授课管理',
//           '设备管理',
//           '设备管理-设备关联',
//           '设备管理-设备信息',
//           '能耗管理',
//           '定时服务',
//           '工程账号管理'
//         ])
//       }
//     })
//   }
//   render() {
//     const { getFieldDecorator } = this.props.form
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <Form.Item>
//           {
//             getFieldDecorator('username', {
//               initialValue: '19951977594',
//               rules: [{ required: true, message: '请输入用户名!' }]
//             })()
//             // <Input
//             //   prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
//             //   placeholder="用户名"
//             //   size="large"
//             // />
//           }
//         </Form.Item>
//         <Form.Item>
//           {
//             getFieldDecorator('password', {
//               initialValue: '123456',
//               rules: [{ required: true, message: '请输入密码!' }]
//             })()
//             // <Input
//             //   prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
//             //   type="password"
//             //   placeholder="密码"
//             //   size="large"
//             // />
//           }
//         </Form.Item>
//         <Form.Item>
//           <Button
//             style={{ height: '48px', marginTop: '30px' }}
//             block
//             type="primary"
//             htmlType="submit"
//           >
//             登录
//           </Button>
//         </Form.Item>
//       </Form>
//     )
//   }
// }
// const mapDispatchToProps = {
//   setAuth
// }
// const WrappeNormalLoginForm = Form.create({ name: 'normal_login' })(
//   NormalLoginForm
// )
// export default withRouter(connect(null, mapDispatchToProps)(HeatLogin))
