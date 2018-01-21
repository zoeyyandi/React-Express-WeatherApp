import React, { Component } from 'react';

class EachDay extends Component {
  render() {
    return (
      <div
        className="dailyWeather"
        style={{
          display: 'grid',
          gridArea: `day${this.props.dayWeather.day}`,
          border: '1px solid black'
        }}
      >
        <p>{this.props.dayWeather.daytemp}</p>
      </div>
    );
  }
}

export default EachDay;
