import React, { Component } from 'react';
import './App.css';
import Data from './Data.js';
import autoBind from 'react-autobind';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
    autoBind(this);
    this.inIt();
  }

  // componentDidMount() {
  //   axios.get('https://reqres.in/api/users/1').then(res => console.log('Bandla.....', res.data));
  // }
}
// var Data = new (function() {
//     this.data = function() {
//       axios.get('https://reqres.in/api/users/1').then(res => console.log('Bandla.....', res.data));
//     };

// inIt() {
//   var totalData = Data.data();
//   console.log('arif..........totalData', totalData);
/*  setTimeout(function() {
      this.setState({
        data: totalData
      });
    }, 3000); */

//console.log('arif..........state', this.state);

render();
{
  return (
    <div className="App">
      <div>
        <select>
          <option value=""> select</option>
          <option value="HR"> HR</option>
          <option value="DEPARTMENT">DEPARTMENT</option>
        </select>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <select>
          <option value=""> select</option>
          <option value="Employees"> Employee 1</option>
          <option value="Employees"> Employee 2</option>
          <option value="Employees"> Employee 3</option>
        </select>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button">Get Details</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button">Clear</button>
        <div />
        <br />
        <div>
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg" width="500px" />
        </div>
      </div>
    </div>
  );
}
export default App;
