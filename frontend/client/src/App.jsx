import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
     <Routes>
        <Route path='/' element = {<Lobby/>}/>
        <Route path='/room/:roomId/:email' element = {<Room />}/>
      </Routes>
     </div>
    </>
  )
}

export default App
