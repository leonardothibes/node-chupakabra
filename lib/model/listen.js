'use strict';

const http = require('http'),
      url  = require('url');

/**
 * @param {Object}   options
 * @param {Int}      options.p Port to listen
 * @param {Function} callback  Callback function
 */
exports.start = function(options, callback)
{
    const app = http.createServer(function(request, response)
    {
        console.log(request.url);
        console.log(request.body);

        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end();
    });

    callback(null, app);
};
