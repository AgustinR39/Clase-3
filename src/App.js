// import logo from './logo.svg';
import './App.css';
import React from 'react';
import InputText from './inputText';
import InputRadio from './inputRadio';
import InputCheck from './inputCheck';

class App extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
  }

  actualizarControlado = (name, value) => {
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>

          <h1>Formulario</h1>
          <h2>Completa los siguientes campos a continuación</h2>
        
        <InputText descripcion="Nombre" name="Nombre " onChange={this.actualizarControlado}></InputText>
        <InputText descripcion="Apellido" name="Apellido " onChange={this.actualizarControlado}></InputText>
        <InputText descripcion="E-Mail" name="E-Mail " onChange={this.actualizarControlado}></InputText>
        <div className='row'>
          <div>
            <h3>Genero</h3>
            <InputRadio onChange={this.actualizarControlado}></InputRadio>
          </div>
          <div>
            <h3>Nivel de estudios</h3>
            <InputCheck onChange={this.actualizarControlado}></InputCheck>
          </div>
        </div>
        <p>Acepta terminos y condiciones <input required type="checkbox" name="ok" value="1" onChange={this.actualizarControlado}></input> </p>

        <button type='submit'>Enviar</button>

        </form>
  
      </div>
    );
  }
}

export default App;
