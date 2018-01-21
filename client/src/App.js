import React, { Component } from 'react';
import * as moment from 'moment';
import TodaysWeather from './TodaysWeather';
import WeeklyWeather from './WeeklyWeather';
import InputCity from './InputCity';
const cities = require('./utilities/citylist.json');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedCity: null,
      searchedCountry: null,
      weekWeather: []
    };
  }

  searchCity = city => {
    return cities.filter(
      c => c.name.toLowerCase().indexOf(city.toLowerCase()) >= 0
    );
  };

  render() {
    return (
      <div className="container">
        <TodaysWeather todaysWeather={this.state.weekWeather[0]} />
        <WeeklyWeather weekWeather={this.state.weekWeather} />
        <InputCity searchCity={this.searchCity} />
      </div>
    );
  }
}

export default App;
