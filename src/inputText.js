import React from "react"

class InputText extends React.Component{
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
                <label for={this.props.name}>{this.props.name}</label>
                <input type="text" value={this.state.value} onChange={this.actualizar} placeholder={this.props.descripcion}></input>
            </div>
        )
    }
}

export default InputText