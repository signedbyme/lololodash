'use strict';
var _ = require("lodash");

var worker = function(items) {
    // do work; return stuff
   	return _.sortBy(items, 'quantity').reverse()
};

// export the worker function as a nodejs module
module.exports = worker;