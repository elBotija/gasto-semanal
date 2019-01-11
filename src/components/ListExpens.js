import React, { Component } from 'react'
import RowExpen from './RowExpen'
import PropTypes from 'prop-types'

class ListExpens extends Component{
    render(){
        return(
            <table className="striped">
                <thead>
                  <tr>
                      <th>Gasto</th>
                      <th>Monto</th>
                  </tr>
                </thead>

                <tbody>
                    { Object.keys( this.props.expens ).map( key => (
                        <RowExpen
                            key={key}
                            expen={this.props.expens[key]}
                        />
                    ) ) }
                </tbody>
            </table>
        )
    }
}

ListExpens.propTypes = {
    expens: PropTypes.object.isRequired
}

export default ListExpens
