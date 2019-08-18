import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './ButtonComp.css';

// sample-----
class ButtonComp extends Component {
  state = {
    enable: false,
    display: 'none',
    str: ''
  };
  handleButtonClick = () => {
    if (!this.state.enable) {
      this.setState(
        {
          enable: true,
          disp: 'block',
          str: ''
        },
        () => {
          setTimeout(() => {
            this.setState({
              enable: false,
              disp: 'none',
              str: ''
            });
          }, 5000);
        }
      );
    }
  };

  render() {
    return (
      <div>
        <button className="btn" disabled={this.state.enable} onClick={this.handleButtonClick}>
          Place Order
          {this.state.str}
          {this.state.enable && <span className="loader" style={{ display: this.state.disp }} />}
        </button>
      </div>
    );
  }
}

export default ButtonComp;
