import React from 'react'
const MostrarVoltas = (props) => {
  return (
    <p>
      <span className="numVoltas"> {props.voltas}</span>

      <br />
      <span className="voltas">Voltas</span>
    </p>
  )
}
export default MostrarVoltas
