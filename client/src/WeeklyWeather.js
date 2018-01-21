import React, { Component } from 'react';
import EachDay from './EachDay';

class WeeklyWeather extends Component {
  render() {
    return (
      <div className="weekContainer">
        {this.props.weekWeather.map((item, index) => (
          <EachDay key={index} dayWeather={item} />
        ))}
      </div>
    );
  }
}

export default WeeklyWeather;
