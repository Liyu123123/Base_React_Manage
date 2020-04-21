import React, { Component, useState, useEffect, useRef, useMemo ,memo,useCallback} from 'react'
import { Button } from 'antd'
const MemoChild = memo(function Child(props) {
  console.log(' child render')
  return <div>{props.count}</div>
})
export default () => {
  const [count, setCount] = useState(0)
  const [clickcount, setClickcount] = useState(0)
  const double = useMemo(() => {
    return count * 2
  }, [count === 3])
  const testclickcount = useCallback(
    () => {
      console.log('clickcount')
    },
    [],
  )
  return (
    <div>
      {count}
      <Button onClick={() => setCount(count + 1)}></Button>
      <MemoChild count={double} testclickcount={testclickcount} />
    </div>
  )
}
