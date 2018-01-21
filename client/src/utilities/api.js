import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.API_KEY;
const API_URL = 'http://api.openweathermap.org/data/2.5';

const getWeather = cityId => {
  let getWeatherUrl = `${API_URL}/forecast/daily?id=${cityId}&units=metric&cnt=7&appid=${API_KEY}`;

  return new Promise((resolve, reject) =>
    fetch(getWeatherUrl)
      .then(res => res.json())
      .then(value => {
        let weekWeather = [];
        value['list'].forEach((item, index) => {
          let newItem = {
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
        resolve(weekWeather);
      })
      .catch(err => console.log(err))
  );
};

export default getWeather;
