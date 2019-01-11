import './css/App.css';

import React, { Component } from 'react';
import Header from './components/Header';
import ExpensesFrom from './components/ExpensesForm'
import ListExpens from './components/ListExpens'
import BudgetControl from './components/BudgetControl'
import { validateBudget } from './helper'

class App extends Component {

    state = {
        budget: '',
        remaining: 0,
        expens: {}
    }

    componentDidMount(){
        this.getBudget()
    }

    getBudget = () => {
        let budget = prompt('what is your budget?')

        let result = validateBudget(budget)
        if(result){
            this.setState({
                budget: budget,
                remaining: Number(budget)
            })
        }else{
            this.getBudget()
        }
    }

    addExpens = (expen) => {
        //copia del state actual
        const expens = {...this.state.expens}

        //agregamos el nuevo gasto
        expens[`gasto${Date.now()}`] = expen

        //restar Presupuesto
        this.subtractExpense( expen.cantidadGasto )

        //agregamos al state el nuevo gasto junto con sus anteriores
        this.setState({
            //expens: expens or
            expens
        })

    }

    //restar del remaining el gasto

    subtractExpense = ( expense ) => {
        //leer el gasto
        let subtract = Number(expense)

        //copiar el state
        let remaining = this.state.remaining

        //resta
        remaining -= subtract;

        //setear el resultado
        this.setState({
            remaining : remaining
        })
    }

  render() {
    return (
      <div className="App container z-depth-2">
        <Header
            title='Gasto Semanal'
        />
        <div className="row">
            <div className='col s6'>
                <ExpensesFrom
                    addExpens={this.addExpens}
                />
            </div>
            <div className='col s6'>
                <ListExpens
                    expens={this.state.expens}
                />

                <BudgetControl
                    budget={this.state.budget}
                    remaining={this.state.remaining}
                />
            </div>
        </div>

      </div>
    );
  }
}

export default App;
