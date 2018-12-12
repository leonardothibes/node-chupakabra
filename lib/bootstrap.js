'use strict';

require('console.table');
const colors = require('colors');

function initLoggers(done)
{
    colors.setTheme({
        get   : ['green'  , 'bold'],
        post  : ['magenta', 'bold'],
        put   : ['blue'   , 'bold'],
        patch : ['gray'   , 'bold'],
        delete: ['red'    , 'bold'],
    });

    console.success = message => { console.log(colors.green(message)); };
    console.error   = message => { console.log(colors.red(message));   };
    console.info    = message => { console.log(colors.blue(message));  };

    done();
}

module.exports = function(done)
{
    initLoggers(function() {
        done();
    });
};
