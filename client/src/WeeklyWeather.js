import React, { Component } from 'react';
import EachDay from './EachDay';

class WeeklyWeather extends Component {
  renderDayName() {
    let days = {
      sameDay: '[Today]',
      nextDay: 'ddd',
      nextWeek: 'ddd',
      lastDay: 'ddd',
      lastWeek: 'ddd'
    };
  }
  render() {
    return (
      <div className="weekContainer">
        {this.props.weekWeather.map((item, index) => (
          <EachDay
            key={index}
            index={index}
            dayWeather={item}
            color={this.props.color}
          />
        ))}
      </div>
    );
  }
}

export default WeeklyWeather;
