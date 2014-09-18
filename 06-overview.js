'use strict';
var _ = require("lodash");

var worker = function(orders) {
  // do work; return stuff
   var overview = [];

  // groups the orders by article
  orders = _.groupBy(orders, 'article');
  //console.log('orders', orders);

  _.forEach(orders, function(articleOrders, articleKey){ //item, key, collection 
    
   //console.log('articleOrders', articleOrders);
   //console.log('articleKey', articleKey);
    
    var total_orders = _.reduce(articleOrders, function(total, order) {
            total = total + order.quantity;
            return total;
          },
         0
      );
    
    overview.push({'article': parseInt(articleKey), 'total_orders': total_orders});

  });

  return _.sortBy(overview, 'total_orders').reverse();
};

// export the worker function as a nodejs module
module.exports = worker;