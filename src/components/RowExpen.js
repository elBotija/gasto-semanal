import React, {Component} from 'react'

class RowExpen extends Component {
    render(){
        const {gastoNombre, cantidadGasto} = this.props.expen

        return(
            <tr>
                <td>{gastoNombre}</td>
                <td>${cantidadGasto}</td>
            </tr>
        )
    }
}

export default RowExpen
