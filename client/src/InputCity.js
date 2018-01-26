import React, { Component } from 'react';
import List from './List.js';

class InputCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: [],
      error: null
    };
  }

  handleKeyPress = event => {
    const city = this.textInput.value;
    if (event.key === 'Enter') {
      event.preventDefault();
      const matchedCities = this.props.searchCity(city);
      if (matchedCities.length === 0) {
        this.setState({ error: 'This city weather is not supported yet' });
      } else {
        // call weather api
      }
    }
    // this.setState({ cityList: this.props.searchCity(city) });
  };

  render() {
    return (
      <form className="form">
        <legend className="inputContainer1">
          <p className="inputGuide" id="leftInput">
            {' '}
            Enter your city{' '}
          </p>
          <input
            className="inputBox"
            autoFocus
            ref={input => (this.textInput = input)}
            type="text"
            required
            placeholder={this.props.defaultCity}
            onChange={this.handleKeyPress}
          />
        </legend>
        <legend className="inputContainer2">
          <p className="inputGuide"> Enter your country </p>
          <input
            className="inputBox"
            ref={input => (this.textInput = input)}
            type="text"
            required
            placeholder={this.props.defaultCountry}
            onChange={this.handleKeyPress}
          />
        </legend>
      </form>
    );
  }
}

export default InputCity;
