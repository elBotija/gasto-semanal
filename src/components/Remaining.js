import React, { Component } from 'react'
import { checkBudget } from '../helper'
import PropTypes from 'prop-types'

class Remaining extends Component{
    render(){
        const { remaining, budget } = this.props



        return(
            <div className={`item ${checkBudget(budget, remaining)} lighten-2`}>
                Restante
                <span className='value-number'>${remaining}</span>
            </div>
        )
    }
}

Remaining.propTypes = {
    budget: PropTypes.string.isRequired,
    remaining: PropTypes.number.isRequired
}

export default Remaining
