import React from 'react'
import { useMappedState, useDispatch } from "redux-react-hook";
export default ()=>{
  const counter = useMappedState(state=>state.counter)
  const dispatch = useDispatch()
  console.log(counter)
  console.log(dispatch)

  return (
      <div>
      <h1>
        You pressed it {counter} times
      </h1>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      </div>
    </div>
  )
}