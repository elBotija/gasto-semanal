import React, { Component } from 'react';
import Header from './components/Header';
import ExpensesFrom from './components/ExpensesForm'
import './css/App.css';

class App extends Component {

    super = {
        budget: {},
        remaining: {},
        expens: {},
    }

    addExpens = (expens) => {
        const expen = {...this.state.expens}

        console.log(expen)
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
                addExpens={this.addExpens}/>
            </div>
            <div className='col s6'>
                <table className="striped">
                    <thead>
                      <tr>
                          <th>Gasto</th>
                          <th>Monto</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Asadito</td>
                        <td>$0.87</td>
                      </tr>
                      <tr>
                        <td>Pizza</td>
                        <td>$3.76</td>
                      </tr>
                    </tbody>
                </table>
                <div className='item green lighten-2'>
                    Presupuesto
                    <span className='value-number'>$500</span>
                </div>
                <div className='item orange lighten-2'>
                    Restante
                    <span className='value-number'>$200</span>
                </div>
            </div>
        </div>

      </div>
    );
  }
}

export default App;
