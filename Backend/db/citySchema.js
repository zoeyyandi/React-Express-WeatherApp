// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var citySchema = new Schema({
  id: Number,
  name: String,
  country: String,
  coord: {
    lon: Number,
    lat: Number
  }
});

// we need to create a model using it
var City = mongoose.model('City', citySchema);

// make this available to our users in our Node applications
module.exports = City;
