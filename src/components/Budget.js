import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Budget extends Component{
    render(){
        return(

            <div className='item green lighten-2'>
                Presupuesto
                <span className='value-number'>${this.props.budget}</span>
            </div>

        )
    }
}

Budget.propTypes = {
    budget: PropTypes.string.isRequired
}

export default Budget
