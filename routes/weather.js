var express = require('express'),
    router = express.Router(),
    https = require('https'),
    config = require('config');

var apiKey = config.forecastIOApiKey;

//A simple proxy for forecast.io current weather service
router.get('/current', function(req, res) {
    var weatherPath = 'https://api.forecast.io/forecast/'+apiKey+'/37.8267,-122.423'
    https.get(weatherPath,function(weatherRes){
        weatherRes.pipe(res)
    })
    .on('error',function(e){
        console.log(arguments)
        res.status(500).json(e)
    })
});

module.exports = router;
