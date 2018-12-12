'use strict';

const app = require('express')();

/**
 * @param {Object}   options
 * @param {Int}      options.p Port to listen
 * @param {Function} callback  Callback function
 */
exports.start = function(options, callback)
{
    app.use(function(request, response)
    {
        console.log(request.url);
        console.log(request.headers);
        console.log(request.body);

        response.status(200);
        response.send();
    });

    callback(null, app);
};
