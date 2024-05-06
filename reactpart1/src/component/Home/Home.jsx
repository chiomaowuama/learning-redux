import React, { useEffect, useState } from 'react'

function Home() {
  const [advice, setAdvice] = useState()
  const[count, setCount] = useState(0)
  async function getApi(){
    const resp = await fetch('https://api.adviceslip.com/advice');
    const res = await resp.json()
    setAdvice(res.slip.advice)
    console.log(res.slip.advice)
    setCount((c) => c + 1)
  }

  useEffect(function(){
    getApi()
  },[])
  return (
    <>
    <div>
      <h1>{advice}</h1>
      <button onClick={getApi}>Get advice</button>
      <Message count={count - 1}/>
      {/* <p> you have read <strong>{ count }</strong> pieces of advice</p> */}

    </div>
    </>
  )
}
function Message(props){
  return(
    <p> you have read <strong>{ props.count }</strong> pieces of advice</p>

  )
}

export default Home