import React from 'react'

const App = () => {

  function greet(name) {
    console.log(`Hello, ${name}!`)
  }

  return (
    <div>
      <button onClick={() => greet('Alice')}>Greet Alice</button>
      <button onClick={() => greet('Bob')}>Greet Bob</button>
    </div>
  )
}

export default App