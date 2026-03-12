import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)

  function numChanging() {
    console.log('num is Changed....')
  }

  function num2Changing() {
    console.log('num2 is Changed....')
  }

  useEffect(function() {
    numChanging();
  }, [num])

  useEffect(function() {
    num2Changing();
  }, [num2])
  

  return (
    <div>
      <h1>num {num}</h1>
      <h2>num2 {num2}</h2>

      <button onClick={
        () => {
          setNum(num + 1)
        }
      }>
        NUM
      </button>
      <button onClick={() => {
        setNum2(num2 + 10);
      }}>NUM2</button>
    </div>
  )
}

export default App