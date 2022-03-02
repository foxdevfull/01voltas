import './App.css'
const MostrarVoltas = (props) => {
  return (
    <p>
      {props.voltas}
      <br />
      Voltas
    </p>
  )
}
const MostraTempo = (props) => {
  return (
    <p>
      {props.tempo}
      <br />
      Tempo medio por volta
    </p>
  )
}
const Button = (props) => <button>{props.text}</button>
function App(props) {
  return (
    <div className="App">
      <MostrarVoltas voltas="10" />
      <Button text="+" />
      <Button text="-" />
      <MostraTempo tempo="01:02" />
      <Button text="Iniciar" />
      <Button text="Reiniciar" />
    </div>
  )
}

export default App
