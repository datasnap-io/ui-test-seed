var express = require('express'),
    router = express.Router(),
    config = require('config');

/* GET home page. */
router.get('/', function(req, res) {

  res.render('index', {
        title: 'Datasnap Weather App',
        apiKey: config.forecastIOApiKey
    });
});

module.exports = router;
