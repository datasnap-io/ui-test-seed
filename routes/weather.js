var express = require('express'),
    router = express.Router(),
    http = require('http'),
    config = require('config');

var apiKey = config.forecastIOApiKey;

/* GET users listing. */
router.get('/current', function(req, res) {
    var weatherPath = 'https://api.forecast.io/forecast/'+apiKey+'/37.8267,-122.423'

    http.get(weatherPath,function(weatherResponse){
        res.status(200).json(weatherResponse)
    })
    .on('error',function(e){
        res.status(500).json(e)
    })

});

router.get('/forecast', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
