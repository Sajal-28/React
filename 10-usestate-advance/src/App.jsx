import React, { useState } from 'react'

const App = () => {

  const [Num, setNum] = useState(0)

  const btnClicked = () => {
    setNum(prev => prev + 1)
    setNum(prev => prev + 1)
    setNum(prev => prev + 1)
  }

  return (
    <div>
      <h1>{Num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App