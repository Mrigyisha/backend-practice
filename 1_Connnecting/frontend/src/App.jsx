import { useState } from 'react'
import './App.css'
import axios from "axios"
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })
  
  return (
    <>
      <h1>Hello Gays</h1>
      <p>Jokes: {jokes.length}</p>
      {
        jokes.map((jokes)=>(
            <div key={jokes.id}>
              <h3>{jokes.title}</h3>
              <p>{jokes.content}</p>
            </div>
        ))
      }
    </>
  )
}

export default App
