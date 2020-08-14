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

const routes = require('./routes');
const server = express();



const fn = require('./functions');

// console.log(fn.getRandomIndex(30));
// fn.getAllJokes();
// fn.getSingleJoke(console.log)

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))

const h = hbs.create({});
h.handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
  return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))



server.use('/', routes)


// Export Server
module.exports = server