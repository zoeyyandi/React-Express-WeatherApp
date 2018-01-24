var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var es = require('event-stream');
var getStream = require('./db/saveCities');

var cities = require('./routes/cities');
var app = express();

//Import the mongoose module
var mongoose = require('mongoose');
var City = require('./db/citySchema');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/cities', cities);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

//Only run once to seed mongodb//

// getStream().pipe(
//   es.mapSync(function(city) {
//     var newCity = new City({
//       id: city.id,
//       name: city.name,
//       country: city.country,
//       coord: {
//         lon: city.coord.lon,
//         lat: city.coord.lat
//       }
//     });
//     newCity.save(function(err) {
//       if (err) {
//         throw err;
//       }
//     });
//   })
// );

module.exports = app;
