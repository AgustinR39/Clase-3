import React from "react"

class InputRadio extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            value:""
        }
    }

    actualizar = (event) => {
        this.setState({ value: event.target.value })
        this.props.onChange(this.props.name, event.target.value)
    }

    render() {
        return(
            <div>
                <div>
                    <input type="radio" name="genero" value={this.state.value} onChange={this.actualizar}></input>
                    <label for="male">Masculino</label>
                </div>
                <div>
                    <input type="radio" name="genero" value={this.state.value} onChange={this.actualizar}></input>
                    <label for="female">Femenino</label>
                </div>
                <div>
                    <input type="radio" name="genero" value={this.state.value} onChange={this.actualizar}></input>
                    <label for="otro">Otro</label>
                </div>
            </div>
        )
    }
}

export default InputRadio