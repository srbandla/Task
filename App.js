import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
//import Component1 from './Component1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TELE - DNA PROJECT</h1>
        <div className="main">
          <div className="left">
            <h2> Customer Name</h2>
            {this.props.details.map(el => (
              <h3 key={el.id}>
                <button onClick={() => this.props.selectCustomer(el.id)}>{el.name}</button>
              </h3>
            ))}
          </div>

          <div className="right">
            <h2> Customer Details </h2>
            {this.props.history.map(el => (
              <table key={el.id}>
                <tr>
                  <td> Name</td> <td> : &nbsp;&nbsp;&nbsp;{el.name} </td>
                </tr>
                <tr>
                  <td> Address </td> <td>:&nbsp;&nbsp;&nbsp;{el.addr} </td>
                </tr>
                <tr>
                  <td> Phone No</td> <td>:&nbsp;&nbsp;&nbsp;{el.phno} </td>
                </tr>
                <tr>
                  <td> ID </td> <td>:&nbsp;&nbsp;&nbsp;{el.id} </td>
                </tr>
              </table>
            ))}
          </div>
        </div>

        {/*<Component1 toCmp1 = {this.props.details} />*/}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    details: state.details,
    history: state.history
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectCustomer: id => dispatch({ type: 'SELECT', key: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
