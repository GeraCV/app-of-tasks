import React from 'react'
import '../styles/form.css'

class Formulary extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      owner: '',
      description: '',
      date: ''
    }

    this.saveTextInput = this.saveTextInput.bind(this)
    this.submitFormulary = this.submitFormulary.bind(this)

  }


  saveTextInput(e) {
    const { value, name } = e.target
    this.setState({
      [name]: value
    })
    // console.log(this.state)
  }

  submitFormulary(e) {
    e.preventDefault()
    this.props.addTask(this.state)
    this.setState({
      name: '',
      owner: '',
      description: '',
      date: ''
    })
    // console.log(this.state)
  }


  render() {
    return (
      <form className="form" onSubmit={this.submitFormulary}>
        <div className="title-pricipal">
          <h3 className="title"> Escribe una tarea </h3>
        </div>
        <div className="container-data">
          <div className="c-subt">
            <p className=" subtitle-form "> Titulo: </p>
            <input type="text" required value={this.state.name} onChange={this.saveTextInput} placeholder="Escribe el titulo de tu tarea" name="name" />
          </div>
          <div className="c-na">
            <p className=" subtitle-form"> Nombre: </p>
            <input type="text" required value={this.state.owner} onChange={this.saveTextInput} placeholder="Escribe el propietario" name="owner" />
          </div>
          <div className="c-des">
            <p className=" subtitle-form"> Descripción: </p>
            <input type="text" required value={this.state.description} onChange={this.saveTextInput} placeholder="Escribe la descripcion" name="description" />
          </div>
          <div className="c-date">
            <p className=" subtitle-form"> Fecha: </p>
            <input type="text" required value={this.state.date} onChange={this.saveTextInput} placeholder="Escribe la fecha" name="date" />
          </div>
          <div className="container-submit">
            <button type="submit" className="submit"> Imprimir tarea </button>
          </div>
        </div>
      </form>
    )
  }
}

export default Formulary