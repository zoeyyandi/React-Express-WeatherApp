import React, { Component } from 'react';

class InputCity extends Component {
  handleKeyDown1 = event => {
    const city = this.cityInput.value;
    const country = this.countryInput.value;
    if (event.keyCode === 13 && this.countryInput) {
      event.preventDefault();
      this.props.updateCity(city, country);
      this.props.getRealWeather();
    }
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
            ref={input => (this.cityInput = input)}
            type="text"
            required
            placeholder={this.props.defaultCity}
            onKeyDown={this.handleKeyDown1}
          />
        </legend>
        <legend className="inputContainer2">
          <p className="inputGuide"> Enter your country </p>
          <input
            className="inputBox"
            ref={input => (this.countryInput = input)}
            type="text"
            required
            placeholder={this.props.defaultCountry}
            onKeyDown={this.handleKeyDown2}
          />
        </legend>
      </form>
    );
  }
}

export default InputCity;
