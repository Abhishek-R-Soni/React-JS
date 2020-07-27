import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

class Service extends React.Component{
  // return boolean value
  isServiceAvailable(){
    alert('Yes...')
  }

  // button
  render(){
    return <button onClick={this.isServiceAvailable}>Service</button>
  }
}

// Car Component
class Car extends React.Component{

  // initialization state
  constructor(props){
    super();
  }

  // render table
  render(){
    return (
      <div>
        <h1>Car Demo</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Price</th>
          </tr>

          <tr>
            <td>{this.props.name}</td>
            <td>{this.props.model}</td>
            <td>{this.props.price}</td>
          </tr>
          
        </table>
        
        <Service />
      </div>
    )
  }
}

const root = (
  <div>
    <Car name="Hyundai" model="i10" price="9,99,999" />
    <Car name="Tata" model="i10" price="12,99,999" />
    <Car name="Maruti" model="Alto" price="10,000,00" />
  </div>
)

ReactDOM.render(root, document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
