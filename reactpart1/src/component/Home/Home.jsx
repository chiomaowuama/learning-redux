import React, { useState } from 'react'

function Home() {
  const [advice, setAdvice] = useState()
  async function getApi(){
   const resp = await fetch("https://api.advicelip.com/advice");
   const res = await resp.json()
   setAdvice(res.slip.advice)
   console.log(res.slip.advice)
  }

  return (
    <>
    <div>
      <h1>{advice}</h1>
      <button onClick={getApi}>Get advice</button>
    </div>
    </>
  )
}

export default Home