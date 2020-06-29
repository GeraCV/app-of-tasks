import React from 'react'
import '../styles/task.css'

const Task = ({ name, owner, description, date, }) => {
  return (
    <div className="container-task" key={name}>
      <div className="c-information-task">
        <h1 className="name"> <span className="sub-text">Tarea: </span>  {name} </h1>
        <p className="owner"> <span className="sub-text"> Propietario: </span> {owner} </p>
      </div>
      <div className="c-description-task">
        <p className="description"> <span className="sub-text"> Descripción: </span> {description} </p>
        <p className="urgency"> <span className="sub-text"> Fecha: </span> {date}</p>
      </div>

    </div>
  )
}

export default Task