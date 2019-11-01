import { lazy } from 'react'

/**
 * name: 路由对应的名称
 * role: 路由对应的权限名称
 * component: 路由对应的组件
 * path: 路由对应的path(子路由的path需加上对应所有父级的path)
 * icon: 图标
 * redirect: 决定此路由是否是大菜单，以跳转到对应的子路由
 * children: 大菜单，子路由
 * hidden: 是否隐藏(true隐藏，默认打开)
 */

export const RouteConfig = [
  {
    name: '首页',
    path: '/Base_React_Manage/Dashboard',
    component: lazy(() => import('../views/test/Dashboard')),
    role: '首页',
    icon: 'home'
  },
  {
    name: '学校管理',
    path: '/Base_React_Manage/messageManage',
    role: '学校管理',
    icon: 'reconciliation',
    redirect: '/Base_React_Manage/messageManage/test11',
    children: [
      {
        name: '学生管理',
        path: '/Base_React_Manage/messageManage/test11',
        icon: '',
        role: '学校管理-学生管理',
        redirect: '/Base_React_Manage/messageManage/test11/test111',
        children: [
          {
            name: '班级管理',
            path: '/Base_React_Manage/messageManage/test11/test111',
            component: lazy(() => import('../views/messageManage/infopartOne')),
            role: '学校管理-学生管理-班级管理',
            icon: ''
          }
        ]
      },
      {
        name: '教师管理',
        path: '/Base_React_Manage/messageManage/test22',
        redirect: '/Base_React_Manage/messageManage/test22/test222',
        icon: '',
        role: '学校管理-教师管理',
        children: [
          {
            name: '授课管理',
            role: '学校管理-教师管理-授课管理',
            path: '/Base_React_Manage/messageManage/test22/test222',
            component: lazy(() => import('../views/messageManage/infopartTwo')),
            icon: ''
          }
        ]
      }
    ]
  },
  {
    name: '设备管理',
    path: '/Base_React_Manage/deviceManage',
    role: '设备管理',
    icon: 'laptop',
    redirect: '/Base_React_Manage/deviceManage/associated',
    children: [
      {
        name: '设备关联',
        path: '/Base_React_Manage/deviceManage/associated',
        component: lazy(() => import('../views/deviceManage/associated')),
        role: '设备管理-设备关联',
        icon: ''
      },
      {
        name: '设备信息',
        path: '/Base_React_Manage/deviceManage/infomation',
        component: lazy(() => import('../views/deviceManage/infomation')),
        role: '设备管理-设备信息',
        icon: ''
      }
    ]
  },
  {
    name: '能耗管理',
    path: '/Base_React_Manage/energyManagement',
    component: lazy(() => import('../views/energyManagement')),
    role: '能耗管理',
    icon: 'thunderbolt'
  },
  {
    name: '定时服务',
    path: '/Base_React_Manage/regularService',
    component: lazy(() => import('../views/regularService')),
    role: '定时服务',
    icon: 'clock-circle'
  },
  {
    name: '工程账号管理',
    path: '/Base_React_Manage/projectAccountManagement',
    component: lazy(() => import('../views/projectAccountManagement')),
    role: '工程账号管理',
    icon: 'user'
  }
]
