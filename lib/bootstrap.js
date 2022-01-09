'use strict';

require("console.table");
const chalk = require("chalk");

function initLoggers(done)
{
    console.success = message => { console.log(chalk.green(message)); };
    console.error   = message => { console.log(chalk.red(message));   };
    console.info    = message => { console.log(chalk.blue(message));  };

    done();
}

module.exports = function(done)
{
    initLoggers(function() {
        done();
    });
};
