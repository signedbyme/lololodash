'use strict';
var _ = require("lodash");

var worker = function(freelancers) {
    // do work; return stuff
  	var anal = {};

	var totalIncome = _.reduce(freelancers, function(total, freelancer){
	  return total = total + freelancer.income;
	}, 0);

	anal.average = totalIncome / freelancers.length;

	anal.underperform = _.sortBy( _.filter(freelancers, function(freelancer) {
	  return freelancer.income <= anal.average;
	}), 'income');

	anal.overperform = _.sortBy( _.filter(freelancers, function(freelancer) {
	  return freelancer.income > anal.average;
	}), 'income');

	return anal;	
};

// export the worker function as a nodejs module
module.exports = worker;