/**************************************************
 * File:      server.js
 * Purpose:   Define Server Functionality
 * Authors:   Anthony McGrath (anthony-kyle)
 *            Cameron Shaw    (camshaw11)
 *            Steven De Lacy  (steven-delacy)
 **************************************************/

 // Define Requirements
const express = require('express');
const hbs     = require('express-handlebars');
const index_routes = require('./routes');
const joke_routes = require('./routes/jokes');
const server = express();
const fn = require('../functions');

const api_verb = 'api'
const api_version = 'v1'
const api_base = '/' + api_verb + '/' + api_version

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))

// Custom Helpers
const h = hbs.create({});
h.handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
  return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))

// Routes
server.use('/', index_routes)
server.use(api_base + '/jokes', joke_routes)

// Export Server
module.exports = server