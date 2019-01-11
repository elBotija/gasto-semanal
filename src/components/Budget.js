import React, { Component } from 'react'

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

export default Budget
