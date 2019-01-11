import React, { Component } from 'react'
import { checkBudget } from '../helper'

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

export default Remaining
