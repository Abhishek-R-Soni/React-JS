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
  constructor(){
    super();
    this.state = {
      name: 'Car',
      model: 'Tesla',
      price: 12000
    }
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
            <td>{this.state.name}</td>
            <td>{this.state.model}</td>
            <td>{this.state.price}</td>
          </tr>
          
        </table>
        
        <Service />
      </div>
    )
  }
}

ReactDOM.render(<Car />, document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
