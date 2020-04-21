// import React ,{useState,useReducer} from 'react'
// export default()=>{

//   const [] = useState();
//   return (

//   )
// }
import React from 'react'
import { StoreContext } from 'redux-react-hook'
import store from './store/index'
import Test1 from './components/Test1'
import Test2 from './components/Test2'
function Calc() {
  return (
    <StoreContext.Provider value={store}>
      <div>
        <Test1 />
        <Test2 />
      </div>
    </StoreContext.Provider>
  )
}
export default Calc
