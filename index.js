'use strict';

// This will be our application entry. We'll setup our server here.
const http = require('http');
const app = require('./core/app'); // The express app we just created
const models = require('./models');

const server = http.createServer(app);

