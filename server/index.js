/**************************************************
 * File:      index.js
 * Purpose:   Application Entry Point
 * Authors:   Anthony McGrath (anthony-kyle)
 *            Cameron Shaw    (camshaw11)
 *            Steven De Lacy  (steven-delacy)
 **************************************************/

// Require Server
const server = require('./server');

// Define Port App to be served on
const PORT = process.env.PORT || 3000;

// Instruct App to listen
server.listen(PORT, function () {
  console.log('Server is listening on PORT:', PORT)
})
