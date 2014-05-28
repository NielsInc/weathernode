/*
* Routes function like controller
*/
var http = require('http');

// Code for when index is visited
exports.index = function(req,res){
	res.render('index', {});
};

// Code for the location weather API
exports.location = function(req, res){
	var loc = req.params.location;
	
    var baseUrl=        'http://api.worldweatheronline.com/free/v1/weather.ashx?';
    var locationPrefix= 'q=';
    var location=       'Diegem';
    var formatPrefix=   'format=';
    var format=         'json';
    var numOfDaysPrefix='num_of_days';
    var numOfDays=      '3';
    var apiKeyPrefix=   'key';
    var apiKey=         '286n37evqx245v4b4uvv3r7z';
	
	var datUrl = baseUrl+locationPrefix+loc+formatPrefix+format+numOfDaysPrefix+numOfDays+apiKeyPrefix+apiKey;

	http.get(datUrl, function(res){
        var weatherData = res;
        console.log(weatherData);
    }).on('error', function(e){
        console.log("Error: "+e.getMessage);
    });

	res.send(res);
}