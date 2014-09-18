'use strict';
var _ = require("lodash");

var worker = function(comments) {
    // do work; return stuff
    var commentsGroupedByUser,
    	userCommentCount = [];

    commentsGroupedByUser = _.groupBy(comments, 'username');
    // console.log(commentsGroupedByUser);

    _.forEach(commentsGroupedByUser, function(comments, user, commentsGroupedByUser){
    	//console.log(user, _.size(comments));
    	userCommentCount.push({
    		'username': user,
    		'comment_count': _.size(comments)
    	});
    });
	
	//console.log( userCommentCount, 'comment_count').reverse() );
   	return _.sortBy(userCommentCount, 'comment_count').reverse();
};

// export the worker function as a nodejs module
module.exports = worker;