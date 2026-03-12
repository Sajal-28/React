import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  }

  return (
    <div>
      <form onSubmit = {
        (e) => {
          e.preventDefault();
          submitHandler(e);
        }
      }>
        <input type="text" placeholder='Enter Your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App