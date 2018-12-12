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
    options.p = options.p || 9000;
    listen.start(options, function(error, app)
    {
        if (error) {
            console.error(error);
            return;
        }

        app.listen(options.p, () => console.log(`Start listening on port ${options.p}...`));
    });
};
