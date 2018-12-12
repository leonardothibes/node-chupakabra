'use strict';

const listen = require('../model/listen');

/**
 * Start service listening.
 * 
 * @param {Array}  params
 * @param {Object} options
 * @param {Int}    options.p Port to listen
 */
module.exports = function(params, options)
{
    listen.start(options, function(error, data)
    {
        if (error) {
            console.error(error);
            return;
        }

        console.log(data);
    });
};
