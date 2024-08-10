import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter: {count}</h1>
        <button onClick={() => {if(count<20){setCount((count) => count + 1)}}}>
          Increase
        </button>
        <br />
        <br />
        <button onClick={() => {if(count > 0){setCount((count) => count - 1)}}}>
          Decrease
        </button>
    </>
  )   
}

export default App
