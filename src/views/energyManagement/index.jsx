import React, { useState, useEffect, useReducer } from 'react'
function App() {
  const initialState = {
    count: 0,
    step: 1
  }

  function reducer(state, action) {
    const { count, step } = state
    if (action.type === 'tick') {
      return { count: count + step, step }
    } else if (action.type === 'step') {
      return { count, step: action.step }
    } else {
      throw new Error()
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const { count, step } = state

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' }) // Instead of setCount(c => c + step);
    }, 1000)
    return () => clearInterval(id)
  }, [dispatch])
  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCount(c=>c+1)
  //   }, 1000)
  //   return () => clearInterval(id)
  // }, [])
  return <h1>{count}</h1>
}
export default App
