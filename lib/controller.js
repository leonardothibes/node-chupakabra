'use strict';

/**
 * Gerencia os comandos do usuário e encaminha para a ação adequada.
 *
 * @param {Object} args
 * @param {Array}  args.commands Composição dos comandos e argumentos.
 * @param {Array}  args.options  Opçoes modificadoras.
 * @param {Array}  args.input    Input original.
 */
exports.handle = function(args)
{
    let name,
        command;

    if (args.commands[0] === 'help' || args.options.h || args.options.help) {
        name = 'help';
    } else if (args.commands[0] === 'version' || args.options.v || args.options.version) {
        name = 'version';
    } else {
        name = args.commands[0] || 'listen';
    }

    try {
        command = require('./command/' + name);
        command(args.commands.slice(1), args.options);
    } catch (e) {
        const message = (e.code === 'MODULE_NOT_FOUND') ? `Comando não encontrado: ${name}` : e.message;
        console.error(message);
    }
};
