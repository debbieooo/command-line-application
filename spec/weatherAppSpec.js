
//Not implemented yet

'use strict'

var forecast = require('../app/forecastApi.js');

describe("Check for correct response", function() {

    it("should return the right location for longitude and latitude", function() {

     expect(console.log(forecast.forecastApi(6.5244,3.3792))).toEqual('The weather is Mostly Cloudy in Africa/Lagos with a temperature of 31.68 degrees celsius');
    	
    });


  });
