import React, {Component} from 'react'
import PropTypes from 'prop-types'

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

RowExpen.propTypes = {
    expen: PropTypes.object.isRequired
}

export default RowExpen
