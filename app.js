/**
* Module dependencies.
*/
var express = require('express'),
	generalRoutes = require('./routes/generalRoutes.js'),
	less = require('less');

var http = require('http');

var app = express();

/**
* Configuration
*/
app.set('views', __dirname + '/views');
app.set('view engine','jade');
app.use(express.static(__dirname + '/public'));
app.set("view options", {
    layout: false,
    pretty: true
});


/**
* Routes
*/
app.get('/', generalRoutes.index);
app.get('/weather/:location', generalRoutes.location);

/**
* REST Config
*/
var urlConfig = {
    baseUrl:        'http://api.worldweatheronline.com/free/v1/weather.ashx?',
    locationPrefix: 'q=',  
    location:       'Diegem',
    formatPrefix:   'format=',
    format:         'json',
    numOfDaysPrefix:'num_of_days', 
    numOfDays:      '3',
    apiKeyPrefix:   'key',
    apiKey:         '286n37evqx245v4b4uvv3r7z' 
} 

/**
* Server
*/
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
    /*http.get('http://api.worldweatheronline.com/free/v1/weather.ashx?q=London&format=json&num_of_days=5&key=286n37evqx245v4b4uvv3r7z', function(res){
        console.log(res);
    }).on('error', function(e){
        console.log("Error: "+e.getMessage);
    });*/
});




