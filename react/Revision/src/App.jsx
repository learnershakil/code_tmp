import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="text-4xl font-bold underline text-red-600 ml-96"> <h1>
      Hello world!
    </h1></div>
   
      <h1 className='border-slate-700 border border-solid rounded-2xl px-2'>Counter: {count}</h1>
        <button className='border-slate-700 border border-solid rounded-2xl px-2' onClick={() => {if(count<20){setCount((count) => count + 1)}}}>
          Increase
        </button>
        <br />
        <button className='border-slate-700 border border-solid rounded-2xl px-2' onClick={() => {if(count > 0){setCount((count) => count - 1)}}}>
          Decrease
        </button>
    </>
  )   
}

export default App
