import { useState } from 'react'
import './App.css'
// import Main1 from './Main1'
import Fun1 from './Fun1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Main1></Main1> */}
      <Fun1></Fun1>
    </div>
  )
}

export default App
