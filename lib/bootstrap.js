'use strict';

function initLoggers(done)
{
    require('console.table');
    const color = require('colors');

    console.success = message => { console.log(color.green(message)); };
    console.error   = message => { console.log(color.red(message));   };
    console.info    = message => { console.log(color.blue(message));  };

    done();
}

module.exports = function(done)
{
    initLoggers(function() {
        done();
    });
};
