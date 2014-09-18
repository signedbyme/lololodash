'use strict';
var _ = require("lodash");

var worker = function(cities) {
    // do work; return stuff   
    var result = {
    	hot: [],
    	warm: []
    };

	_.forEach(cities, function(cityTemps, city, cities){
		
		if ( _.every(cityTemps, checkTemp) ){
			//console.log(key, temperatures, 'HOT');
			result.hot.push(city);
		} else if ( _.some(cityTemps, checkTemp) ) {
			//console.log(key, temperatures, 'WARM');
			result.warm.push(city);
		}

	});
	
	//console.log(result);
	return result;

	// helper functions
	function checkTemp(temperature){
		return temperature > 19;
	};

};


// export the worker function as a nodejs module
module.exports = worker;
