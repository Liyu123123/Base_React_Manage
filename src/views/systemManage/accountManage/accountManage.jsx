// import React, {
//   useEffect,
//   useState,
//   forwardRef,
//   useImperativeHandle,
//   createRef,
//   useContext
// } from 'react'
// import Form from 'antd/lib/form/Form'
// import usePagination from '../../../components/usePagination'
// import useTableDataLoader from '../../../components/useTableDataLoader'
// import { PlusOutlined } from '@ant-design/icons';
// import {
//   Table,
//   Button,
//   Modal,
//   Input,
//   DatePicker,
//   Select,
//   message,
//   InputNumber,
//   Pagination,
// } from 'antd';
// import moduleCss from '../accountManage/accountManage.module.scss'
// export default () => {
//   const [OnlyKey, setOnlyKey] = useState(0)
//   // const { pagaination, setPage, setPageSize } = usePagination()
//   // const { data, loading } = useTableDataLoader(
//   //   'getIotHeatingSchedulesForPage',
//   //   pagaination,
//   //   OnlyKey
//   // )
//   // const { tableData, total } = data
//   const tableData = [
//     {
//       account: 'ceshi',
//       accountId: '3513540891575296',
//       accountType: '2',
//       accountTypeName: '企业用户',
//       clearText: '8M987R',
//       createTime: '2019-12-13 10:14:19',
//       name: '邬海涛',
//       phone: '18086702270',
//       relaCompany: '3479514279445504',
//       relaCompanyName: '四合院',
//       relaConstruct: '',
//       relaConstructName: null,
//       roleId: '1',
//       roleName: '企业用户'
//     },
//     {
//       account: 'yizhongxiang',
//       accountId: '3508131996599296',
//       accountType: '2',
//       accountTypeName: '企业用户',
//       clearText: 'D1441M',
//       createTime: '2019-12-09 14:32:06',
//       name: '易众享',
//       phone: '18086702270',
//       relaCompany: '3479514279445504',
//       relaCompanyName: '四合院',
//       relaConstruct: '',
//       relaConstructName: null,
//       roleId: '5',
//       roleName: '游客'
//     },
//     {
//       account: 'cssg1',
//       accountId: '3508067423192064',
//       accountType: '0',
//       accountTypeName: '施工方',
//       clearText: 'kk716E',
//       createTime: '2019-12-09 13:26:25',
//       name: '测试权限施工',
//       phone: '18086702270',
//       relaCompany: '',
//       relaCompanyName: null,
//       relaConstruct: '3471260031026172',
//       relaConstructName: '测试施工',
//       roleId: '2',
//       roleName: '施工方'
//     },
//     {
//       account: 'wangdaiyao',
//       accountId: '3507920510403584',
//       accountType: '4',
//       accountTypeName: '运营方',
//       clearText: '123456',
//       createTime: '2019-12-09 10:56:58',
//       name: '王代尧',
//       phone: '13182956162',
//       relaCompany: '',
//       relaCompanyName: null,
//       relaConstruct: '',
//       relaConstructName: null,
//       roleId: '5',
//       roleName: '游客'
//     },
//     {
//       account: 'gerenyonghu',
//       accountId: '3501076715832320',
//       accountType: '3',
//       accountTypeName: '个人用户',
//       clearText: 'pU193T',
//       createTime: '2019-12-04 14:55:06',
//       name: '个人用户',
//       phone: '18086702270',
//       relaCompany: '',
//       relaCompanyName: null,
//       relaConstruct: '',
//       relaConstructName: null,
//       roleId: '3501072625976320',
//       roleName: '个人用户'
//     }
//   ]
//   const actionRender = (text, record, index) => {
//     return (
//       <div className={moduleCss.btn_container}>
//         <Button style={{ marginRight: '10px' }} type="primary" size={'small'}>
//           查看
//         </Button>
//         <Button style={{ marginRight: '10px' }} type="primary" size={'small'}>
//           重置密码
//         </Button>
//         <Button style={{ marginRight: '10px' }} type="primary" size={'small'}>
//           编辑
//         </Button>
//         <Button style={{ marginRight: '10px' }} type="danger" size={'small'}>
//           删除
//         </Button>
//       </div>
//     )
//   }
//   const columns = [
//     {
//       dataIndex: 'name',
//       title: '姓名'
//     },
//     {
//       dataIndex: 'phone',
//       title: '手机号'
//     },
//     {
//       dataIndex: 'account',
//       title: '账号'
//     },
//     {
//       dataIndex: 'clearText',
//       title: '密码'
//     },
//     {
//       dataIndex: 'accountTypeName',
//       title: '账号类型'
//     },
//     {
//       dataIndex: 'roleName',
//       title: '角色'
//     },
//     {
//       dataIndex: 'createTime',
//       title: '创建时间'
//     },
//     {
//       dataIndex: 'action',
//       title: '操作',
//       render: actionRender,
//       width: '360px'
//     }
//   ]
//   return (
//     <div className={moduleCss.main_container}>
//       <div className={moduleCss.main_container_bar}>
//         <div style={{ overflow: 'hidden' }}>
//           <div className={moduleCss.bar_left}>
//             <Button
//               type="primary"
//               // onClick={handleDialogOpen}
//               className={moduleCss.bar_left}
//             >
//               <PlusOutlined />
//               新增
//             </Button>
//           </div>
//         </div>
//       </div>
//       <div className={moduleCss.main_container_table}>
//         <Table
//           // loading={loading}
//           rowKey={'id'}
//           scroll={{ y: 600 }}
//           columns={columns}
//           dataSource={tableData}
//           pagination={false}
//         />
//         {/* <Pagination
//           showQuickJumper
//           showSizeChanger
//           size="small"
//           current={pagaination.page}
//           pageSize={pagaination.pageSize}
//           total={total}
//           onChange={current => setPage(current)}
//           onShowSizeChange={(page, pageSize) => setPageSize(pageSize)}
//         /> */}
//       </div>
//       <div>
//         {/* <Modal
//           title={formOperate.modalTitle}
//           visible={formOperate.addOrEditVisible}
//           onOk={handleConfirmAddOrEdit}
//           onCancel={handleCancelAddEditModel}
//           afterClose={handleModelClose}
//         >
//           <div>
//             <EnhancedForm
//               wrappedComponentRef={formRef}
//               initValue={initFormValues}
//             />
//           </div>
//         </Modal> */}
//       </div>
//     </div>
//   );
// }
