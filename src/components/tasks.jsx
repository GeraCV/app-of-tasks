import React from 'react'
import { tasks } from '../tasks.json'
import Task from './task'
import Formulary from './form'
import '../styles/header.css'


class Chores extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks
    }

    this.addToTask = this.addToTask.bind(this)

  }


  addToTask(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
    console.log(this.state)
  }
  render() {

    const ch = this.state.tasks.map(el => {
      return (
        <Task
          key={el.name}
          name={el.name}
          owner={el.owner}
          description={el.description}
          date={el.date}
          del={this.removetotaask}
        />
      )
    })

    return (
      <>
        <header className="header">
          <span className="header-title"> App de tareas </span>
          <div className="container-counter">
            <span className="header-counter"> {this.state.tasks.length} </span>
          </div>
        </header>
        <Formulary addTask={this.addToTask} />
        <div className="container-tasks">
          {ch}
        </div>
      </>
    )
  }
}


export default Chores
