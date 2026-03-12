import React, { useState } from 'react'

const App = () => {

  const [Num, setNum] = useState(0)

  function increase() {
    setNum(Num + 1)
  }

  function decrease() {
    setNum(Num - 1)
  }

  return (
    <div>
      <h1>{Num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default App