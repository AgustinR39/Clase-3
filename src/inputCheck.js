import React from "react"

class InputCheck extends React.Component{
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
                    <input type="checkbox" name="primario" value={this.state.value} onChange={this.actualizar} checked></input>
                    <label for="primario">Primario</label>
                </div>
                <div>
                    <input type="checkbox" name="secundario" value={this.state.value} onChange={this.actualizar}></input>
                    <label for="secundario">Secundario</label>
                </div>
                <div>
                    <input type="checkbox" name="terciario" value={this.state.value} onChange={this.actualizar}></input>
                    <label for="terciario">Terciario</label>
                </div>
            </div>
        )
    }
}

export default InputCheck
