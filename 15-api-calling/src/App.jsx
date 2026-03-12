import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  const getData = async () => {
    

   const res = await axios.get("https://picsum.photos/v2/list")
   setData(res.data)

  }

  return (
    <div>
      <button onClick={getData}>
        Get Data
      </button>
      <div>
        {data.map(function(elem, idx) {
          return <h3>hello, {elem.author} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App