'use strict';
const config = require('./config');
const _ = require('lodash');
const find = require('find');

module.exports = {
    log: log
};





/**
 * Create a log to each element in args
 * @param {ApiLog[] | ApiLog} args - a log or list of logs to be process
 */
function log(args) {
    args = _.isArray(args) ? args : [args];
    console.log(
        `\n------------------ Api @ ${new Date().toISOString()} ------------------`
    );
    for (let i = 0, l = args.length; i < l; i++) {
        console.log(
            _.isObject(args[i]) ? JSON.stringify(args[i]) : args[i]
        );
    }
    console.log('\n');
}