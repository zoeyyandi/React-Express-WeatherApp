const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = 'http://api.openweathermap.org/data/2.5';

const getWeather = cityId => {
  let getWeatherUrl = `${API_URL}/forecast/daily?id=${cityId}&units=metric&cnt=7&appid=${API_KEY}`;

  return fetch(getWeatherUrl)
    .then(res => res.json())
    .then(value => {
      let weekWeather = [];
      value['list'].forEach((item, index) => {
        let newItem = {
          id: item.weather[0].id,
          day: `${index} + 1`,
          daytemp: item.temp.day,
          min: item.temp.min,
          max: item.temp.max,
          humidity: item.humidity,
          main: item.weather[0].main,
          description: item.weather[0].description,
          windSpeed: item.humidity
        };
        weekWeather.push(newItem);
      });
      return weekWeather;
    })
    .catch(e => {
      console.log('err', e);
    });
};

export default getWeather;
