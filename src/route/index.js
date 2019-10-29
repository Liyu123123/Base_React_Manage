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
    path: '/Dashboard',
    component: lazy(() => import('../views/test/Dashboard')),
    role: '首页权限',
    icon: 'home'
  },
  {
    name: '信息管理',
    path: '/messageManage',
    role: '信息管理',
    icon: 'reconciliation',
    redirect:'/messageManage/test11',
    children: [
      {
        name: '信息管理部分一',
        path: '/messageManage/test11',
        icon: '',
        redirect:'/messageManage/test111',
        children: [
          {
            name: '信息一',
            path: '/messageManage/test111',
            component: lazy(() => import('../views/messageManage/infopartOne')),
            role: '设备管理-设备关联',
            icon: ''
          }
        ]
      },
      {
        name: '信息管理部分二',
        path: '/messageManage/test22',
        redirect:'/messageManage/test222',
        icon: '',
        children: [
          {
            name: '信息二',
            path: '/messageManage/test222',
            component: lazy(() => import('../views/messageManage/infopartTwo')),
            icon: ''
          }
        ]
      }
    ]
  },
  {
    name: '设备管理',
    path: '/deviceManage',
    role: '设备管理',
    icon: 'laptop',
    redirect: '/deviceManage/associated1',
    children: [
      {
        name: '设备关联',
        path: '/deviceManage/associatedall',
        component: lazy(() => import('../views/deviceManage/associated')),
        redirect: '/deviceManage/associated1',
        role: '设备管理-设备关联',
        icon: ''
      },
      {
        name: '设备信息',
        path: '/deviceManage/infomation',
        component: lazy(() => import('../views/deviceManage/infomation')),
        role: '设备管理-设备信息',
        icon: ''
      }
    ]
  },
  {
    name: '能耗管理',
    path: '/energyManagement',
    component: lazy(() => import('../views/energyManagement')),
    role: '能耗管理',
    icon: 'thunderbolt'
  },
  {
    name: '定时服务',
    path: '/regularService',
    component: lazy(() => import('../views/regularService')),
    role: '定时服务',
    icon: 'clock-circle'
  },
  {
    name: '工程账号管理',
    path: '/projectAccountManagement',
    component: lazy(() => import('../views/projectAccountManagement')),
    role: '工程账号管理',
    icon: 'user'
  }
]
