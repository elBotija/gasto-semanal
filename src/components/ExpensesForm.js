import React, { Component } from 'react'

class ExpensesFrom extends Component{

    //ref

    gastoNombreRef = React.createRef()
    cantidadGastoRef = React.createRef()

    newExpens = (e) => {
        e.preventDefault()
        //validar campos
        if(this.gastoNombreRef.current.value !== '' && this.cantidadGastoRef.current.value !== ''){

            // crear objeto
            let expens = {
                gastoNombre: this.gastoNombreRef.current.value,
                cantidadGasto: this.cantidadGastoRef.current.value
            }

            console.log(expens)
            //enviarlo a las props
            this.props.addExpens(expens)

            //reset
            e.currentTarget.reset()
        }


    }

    render(){
        return(
            <form onSubmit={this.newExpens}>
                <div className="row">
                    <div className="input-field col s12">
                        <input ref={this.gastoNombreRef} id="gastoNombre" type="text" className="validate"/>
                        <label htmlFor="gastoNombre">Nombre del gasto</label>
                    </div>
                    <div className="input-field col s12">
                        <input ref={this.cantidadGastoRef} id="cantidadGasto" type="text" className="validate" />
                        <label htmlFor="cantidadGasto">Cantidad gastada</label>
                    </div>
                    <div className="col s6 offset-s3">
                        <button className="waves-effect waves-light btn green lighten-1 col s12">Agregar</button>
                    </div>
                </div>
            </form>
        )
    }
}
export default ExpensesFrom
