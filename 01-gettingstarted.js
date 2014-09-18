'use strict';
var _ = require("lodash");

var worker = function(users) {
    // do work; return stuff
   return _.where(users, {'active': true});
};

// export the worker function as a nodejs module
module.exports = worker;