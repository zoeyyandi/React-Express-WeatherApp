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
    this.setState({ cityList: this.props.searchCity(city) });
  };

  render() {
    return (
      <form className="form">
        {this.state.cityList.length !== 0 && (
          <ul>
            <List id="citylist" cities={this.state.cityList} />
          </ul>
        )}
        <input
          className="inputBox"
          autoFocus
          ref={input => (this.textInput = input)}
          type="text"
          required
          list="citylist"
          placeholder="Enter a City"
          onChange={this.handleKeyPress}
        />
      </form>
    );
  }
}

export default InputCity;
