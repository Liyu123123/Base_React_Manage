const SET_OPENKEYS = 'SET_OPENKEYS'
const SET_AUTH = 'SET_AUTH'
export const setOpenkeys = arr=>({type:SET_OPENKEYS,openKeys:arr})
export const setAuth = arr=>({type:SET_AUTH,AuthList:arr})