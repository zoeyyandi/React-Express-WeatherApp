import React, { Component } from 'react';

class TodaysWeather extends Component {
  render() {
    return (
      <div className="today">
        {this.props.searchedCity && this.props.searchedCountry ? (
          <p>
            {this.props.searchedCity}, {this.props.searchedCountry}
          </p>
        ) : (
          <p>
            {this.props.defaultCity}, {this.props.defaultCountry.toUpperCase()}
          </p>
        )}
        <p> today </p>
      </div>
    );
  }
}

export default TodaysWeather;
