'use strict';

const chalk = require("chalk");
const bodyParser = require("body-parser");
const express = require("express");
const url = require("url");

/**
 * @param {Function} callback
 */
exports.start = function(options, callback)
{
    configure(function(app)
    {
        app.use(function(request, response)
        {
            methodAndUrl(request);
            headers(request);
            queryString(request);
            body(request);
            console.log('');

            response.status(200);
            response.json({
                url    : request.url,
                headers: request.headers,
                body   : request.body,
            });
        });
    
        callback(null, app);
    });
};

/**
 * @param {Object} request 
 */
function methodAndUrl(request)
{
    const message   = `[${request.method}] ${request.url}`;
    const separator = '-'.repeat(request.url.length + request.method.length + 3);

    console.log(separator);
    switch (request.method.toLowerCase())
    {
        case 'get'   : console.log(chalk.green.bold(message))     ; break;
        case 'post'  : console.log(chalk.magenta.bold(message))   ; break;
        case 'put'   : console.log(chalk.blue.bold(message))      ; break;
        case 'patch' : console.log(chalk.gray.bold(message))      ; break;
        case 'delete': console.log(chalk.red.bold(message))       ; break;
    }

    console.log(separator);
    console.log('');
}

/**
 * @param {Object} request 
 */
function headers(request)
{
    console.log('HEADERS:');
    console.log('--------');
    console.log('');
    console.table(request.headers);
}

/**
 * @param {Object} request 
 */
function queryString(request)
{
    const query = url.parse(request.url).query;
    if (!query) { return; }

    const parsed = query.split('&').map(item => {
        item = item.split('=');
        return {key: item[0], value: item[1]};
    });

    console.log('QUERY STRING:');
    console.log('-------------');
    console.log('');
    console.table(parsed);
}

/**
 * @param {Object} request 
 */
function body(request)
{
    if (request.method.toLowerCase() === 'get') {
        return;
    }

    console.log('BODY:');
    console.log('-----');
    console.log('');
    console.table(request.body);
}

function configure(callback)
{
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.text());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use(function(request, response, next)
    {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Credentials', true);
        response.header('Access-Control-Allow-Methods', '*');
        response.header('Access-Control-Allow-Headers', '*');
        next();
    });

    callback(app);
}
