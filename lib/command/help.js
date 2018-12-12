/* jshint -W109 */

'use strict';

const info = require('../../package.json');

/**
 * Show help.
 */
module.exports = function()
{
    let output = info.description + ' (' + info.name + ' - ' + info.version + ')';

    output += "\n";
    output += "Uso: " + info.name + " <command> [options]\n";
    output += "\n";
    output += "  -p               Define which port this service will listen\n";
    output += "  -v|--version     Show the version number\n";
    output += "  -h|--help        Show this help message\n";
    output += "\n";
    output += "For more information: " + info.homepage;

    console.log(output);
};
