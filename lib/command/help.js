'use strict';

const info = require('../../package.json');

/**
 * Exibe a versão do pacote.
 */
module.exports = function()
{
    console.info(info.version);
};
