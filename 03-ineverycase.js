'use strict';
var _ = require("lodash");

var worker = function(cities) {
    // do work; return stuff
   	return _.forEach(cities,
	    function(city, key, cities) {

	    	if ( city.population > 1) {
	    		cities[key].size = 'big';
	    	} else if ( city.population > 0.5) {
				cities[key].size = 'med';
			} else {
				cities[key].size = 'small';
			}

	    }
	);
};

// export the worker function as a nodejs module
module.exports = worker;