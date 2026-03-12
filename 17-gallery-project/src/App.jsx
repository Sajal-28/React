import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {

  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)

  const getData = async () => {
    const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setUserData(res.data);
  }

  useEffect(function() {
    getData();
  }, [index])

  let printUserData = <h4 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading....</h4>;

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-50 bg-white rounded-xl overflow-hidden'>
          <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
        </div>
        <h2 className='font-bold text-lg'>{elem.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className='h-screen bg-black text-white p-4 overflow-auto'>

      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>

      <div className='flex justify-center items-center p-4 gap-2'>
        <button 
        className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2 font-semibold text-sm cursor-pointer active:scale-95'
        onClick={() => {
          if(index > 1) {
            setIndex(index - 1)
            setUserData([])
          }
        }}
        >Prev</button>
        <h4>Page {index}</h4>
        <button 
        className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded font-semibold text-sm cursor-pointer active:scale-95'
        onClick={() => {
          setUserData([])
          setIndex(index + 1)
        }}
        >Next</button>
      </div>
    </div>
  )
}

export default App