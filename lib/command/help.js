/* jshint -W109 */

'use strict';

const info = require('../../package.json');

/**
 * Exibe o help do comando.
 */
module.exports = function()
{
    let output = info.description + ' (' + info.name + ' - ' + info.version + ')';

    output += "\n";
    output += "Uso: telesena <command> [options]\n";
    output += "\n";
    output += "  -c               Define a quantidade de títulos a serem gerados\n";
    output += "  -v|--version     Exibe o número da versão\n";
    output += "  -h|--help        Exibe esta mensagem de help\n";
    output += "\n";
    output += "Para maiores informações: " + info.homepage;

    console.log(output);
};
