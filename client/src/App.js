import React, { Component } from 'react';
import * as moment from 'moment';
import TodaysWeather from './TodaysWeather';
import WeeklyWeather from './WeeklyWeather';
import InputCity from './InputCity';
import getWeather from './utilities/api.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultCity: 'New Toronto',
      defaultCountry: 'CA',
      searchedCity: null,
      searchedCountry: null,
      weekWeather: []
    };
  }

  componentDidMount() {
    this.getRealWeather();
  }

  async getRealWeather() {
    try {
      let { defaultCity, defaultCountry } = this.state;
      const res = await fetch('/cities');
      const cities = await res.json();
      const found = cities.find(
        item =>
          item.name.toLowerCase() === defaultCity.toLowerCase() &&
          item.country.toLowerCase() === defaultCountry.toLowerCase()
      );
      const weekWeather = await getWeather(found.id);
      this.setState({ weekWeather });
    } catch (error) {
      this.setState({ error });
    }
  }

  // searchCity = city => {
  //   return cities.filter(
  //     c => c.name.toLowerCase().indexOf(city.toLowerCase()) >= 0
  //   );
  // };

  render() {
    return (
      <div className="container">
        <TodaysWeather todaysWeather={this.state.weekWeather[0]} />
        <WeeklyWeather weekWeather={this.state.weekWeather} />
        <InputCity
          searchCity={this.searchCity}
          defaultCity={this.state.defaultCity}
          defaultCountry={this.state.defaultCountry}
        />
      </div>
    );
  }
}

export default App;
