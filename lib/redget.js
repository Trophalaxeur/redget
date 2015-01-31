#!/usr/bin/env node

var minimist   = require('minimist');
var main       = require('./lib/main');

var argv = minimist(process.argv.slice(2));
main.run(argv);
