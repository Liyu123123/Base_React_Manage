import React, { useEffect, useState, useRef } from 'react'
// import ShowButton from './components/showButton'
// import ShowArea from './components/showArea'
// import { Color } from './components/color'
export default function Infomation() {
  // const [count, setCount] = useState(0);

  // const prevCountRef = useRef();
  // useEffect(() => {
  //   console.log(111)
  //   console.log(count)
  //   prevCountRef.current = count;
  //   console.log(prevCountRef.current)
  // });
  // const prevCount = prevCountRef.current;
  // console.log(prevCount)
  // console.log(22)

  // return <h1>Now: {count}, before: {prevCount} <button onClick={()=>setCount(count+1)}>increasement</button></h1>;

  // const [count, setCount] = useState(0);
  // const latestCount  = useRef();
  // function handleAlertClick() {
  //   latestCount.current = count
  //   setTimeout(() => {

  //     alert('You clicked on: ' + count);
  //   }, 3000);
  // }

  // return (
  //   <div>
  //     <p>You clicked {count} times</p>
  //     <button onClick={() => setCount(count + 1)}>
  //       Click me
  //     </button>
  //     <button onClick={handleAlertClick}>
  //       Show alert
  //     </button>
  //   </div>
  // )

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log(`You clicked ${count} times`);
  //   }, 3000);
  // });

  // return (
  //   <div>
  //     <p>You clicked {count} times</p>
  //     <button onClick={() => setCount(count + 1)}>
  //       Click me
  //     </button>
  //   </div>
  // );

  const [count, setcount] = useState(0)
  useEffect(() => {
    console.log(111)
    let id = setInterval(() => {
      setcount(count=>count+1)
    }, 1000)
    return()=>clearInterval(id)
  },[])
  return (
    <div>
      {count}
      {/* <button onClick={()=>setcount(count+1)}>increasement</button> */}
    </div>
  )
}
