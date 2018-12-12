'use strict';

/**
 * @param {Object}   options
 * @param {Int}      options.p Port to listen
 * @param {Function} callback  Callback function
 */
exports.start = function(options, callback)
{
    options.p = options.p || 9000;

    callback(null, {
        code   : 'SUCCESS',
        message: 'Listening on port ' + options.p,
    });
};
