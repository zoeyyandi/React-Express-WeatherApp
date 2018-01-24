var express = require('express');
var router = express.Router();
var City = require('../db/citySchema');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   // fetch cities from mongodb and send back
//   res.send({ title: 'Express' });
// });

router.get('/', function(req, res) {
  City.find(function(err, cities) {
    if (err) {
      console.log('err', err);
    } else {
      res.send(cities);
    }
  });
});

router.get('/:cityId', function(req, res) {
  City.find(function(err, city) {
    if (err) {
      console.log('err', err);
    } else {
      res.send(city);
    }
  });
});

module.exports = router;
