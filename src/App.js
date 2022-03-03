import './App.css'
import React from 'react'
import { useState, useEffect } from 'react'
import MostrarVoltas from './components/MostraVoltas'
import MostraTempo from './components/MostraTempo'
import Button from './components/Button'

function App(props) {
  const [numVoltas, setNumVoltas] = useState(0)
  const [running, setRunning] = useState(false)
  const [tempo, setTempo] = useState(0)

  useEffect(() => {
    let time = null
    if (running) {
      time = setInterval(() => {
        setTempo((old) => old + 1)
      }, 1000)
    }
    return () => {
      if (time) {
        clearInterval(time)
      }
    }
  }, [running])

  const toggleRunning = () => {
    setRunning(!running)
  }

  const increment = () => {
    setNumVoltas(numVoltas + 1)
  }
  const decrement = () => {
    setNumVoltas(numVoltas - 1)
  }
  const reset = () => {
    setRunning(!running)
    setTempo(0)
    setNumVoltas(0)
  }
  return (
    <div className="App">
      <MostrarVoltas voltas={numVoltas} />
      <Button text="+" onClick={increment} />
      <Button text="-" onClick={decrement} />
      {numVoltas > 0 && <MostraTempo tempo={Math.round(tempo / numVoltas)} />}

      <Button text="Iniciar" onClick={toggleRunning} />
      <Button text="Reiniciar" onClick={reset} />
    </div>
  )
}

export default App
