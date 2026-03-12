import React, { useState } from 'react'

const App = () => {

  const [Title, setTitle] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted by", Title);
  }

  return (
    <div>
      <form onSubmit = {
        (e) => {
          e.preventDefault();
          submitHandler(e);
          setTitle("");
        }
      }>
        <input 
        type="text" 
        placeholder='Enter Your name'
        value={Title} 
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App