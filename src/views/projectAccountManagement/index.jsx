import React, { Component, useState, useCallback, useRef } from 'react'
import { useEffect } from 'react'

// export default class ProjectAccount extends Component {
//   render() {
//     return (
//       <div>
//           this is Project
//       </div>
//     )
//   }
// }
function useWindowSize() {
  const [width, setWidth] = useState(document.body.clientWidth)
  const onChange = () => {
    setWidth(document.body.clientWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', onChange, false)
    return () => {
      window.removeEventListener('resize', onChange, false)
    }
  })
  return { mywidth: width }
}
export default () => {
  const [text, setText] = useState('')
  const countRef = useRef()
  const { mywidth } = useWindowSize()
  const handleSubmit = useCallback(() => {
    const currentText = countRef.current
    alert(currentText)
  }, [countRef])
  useEffect(() => {
    countRef.current = text
  })
  return (
    <div>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleSubmit}> value</button>
      <div>页面宽度{mywidth}</div>
    </div>
  )
}
