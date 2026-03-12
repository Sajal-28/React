import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Aman Singh' age={18} img='https://plus.unsplash.com/premium_photo-1760198238260-69b966553139?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'/>
      <Card user='Sajal Dubey' age={28} img='https://plus.unsplash.com/premium_photo-1759414754048-6ae705e6b1b8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMjJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600'/>

    </div>
  )
}

export default App