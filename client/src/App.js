import React, { Component } from 'react';
import TodaysWeather from './TodaysWeather';
import WeeklyWeather from './WeeklyWeather';
import * as moment from 'moment';
import InputCity from './InputCity';
import getWeather from './utilities/api.js';
const Spinner = require('react-spinkit');
const randomColor = require('randomcolor');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultCity: 'New Toronto',
      defaultCountry: 'CA',
      searchedCity: null,
      searchedCountry: null,
      weekWeather: [],
      isFetching: false,
      color: null
    };
  }

  componentDidMount() {
    this.setState({ isFetching: true });
    this.setState({
      color: randomColor({ luminosity: 'dark', format: 'hex' })
    });
    this.getRealWeather();
  }

  getRealWeather = async () => {
    try {
      let {
        defaultCity,
        defaultCountry,
        searchedCity,
        searchedCountry
      } = this.state;
      const res = await fetch('/cities');
      const cities = await res.json();
      const found = cities.find(item => {
        if (searchedCity && searchedCountry) {
          return (
            item.name.toLowerCase() === searchedCity.toLowerCase() &&
            item.country.toLowerCase() === searchedCountry.toLowerCase()
          );
        } else {
          return (
            item.name.toLowerCase() === defaultCity.toLowerCase() &&
            item.country.toLowerCase() === defaultCountry.toLowerCase()
          );
        }
      });
      const weekWeather = await getWeather(found.id);
      this.setState({ isFetching: false, weekWeather });
    } catch (error) {
      console.log(error);
    }
  };

  updateCity = (city, country) => {
    this.setState({
      isFetching: true,
      searchedCity: city,
      searchedCountry: country
    });
  };

  render() {
    return (
      <div
        style={{ backgroundColor: this.state.color }}
        className="mainContainer"
      >
        {this.state.isFetching && (
          <Spinner className="spinner" name="ball-spin-fade-loader" />
        )}
        {!this.state.isFetching && (
          <div className="container">
            <TodaysWeather
              todaysWeather={this.state.weekWeather[0]}
              defaultCity={this.state.defaultCity}
              defaultCountry={this.state.defaultCountry}
              searchedCity={this.state.searchedCity}
              searchedCountry={this.state.searchedCountry}
              color={this.state.color}
            />
            <WeeklyWeather
              weekWeather={this.state.weekWeather}
              date={this.state.date}
              color={this.state.color}
            />
            <InputCity
              updateCity={this.updateCity}
              getRealWeather={this.getRealWeather}
              defaultCity={this.state.defaultCity}
              defaultCountry={this.state.defaultCountry}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
