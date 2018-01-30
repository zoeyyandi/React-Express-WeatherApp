import React, { Component } from 'react';
import getColor from './utilities/color.js';
import getIcon from './utilities/icon.js';
import Skycons from 'react-skycons';

class EachDay extends Component {
  render() {
    const icon = getIcon(this.props.dayWeather.id);
    console.log('icon', icon);
    return (
      <div
        className="dailyWeather"
        style={{
          display: 'grid',
          gridArea: `day${this.props.dayWeather.day}`,
          backgroundColor: getColor(
            this.props.color,
            -(this.props.index + 1) / 8
          )
        }}
      >
        <Skycons className="icon" color="white" icon={icon} />
        <p className="temp">{Math.round(this.props.dayWeather.daytemp)}°C</p>
      </div>
    );
  }
}

export default EachDay;
