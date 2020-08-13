/**************************************************
 * File:      routes.js
 * Purpose:   Application Route Definitions
 * Authors:   Anthony McGrath (anthony-kyle)
 *            Cameron Shaw    (camshaw11)
 *            Steven De Lacy  (steven-delacy)
 **************************************************/

 // Define Requirements
 const express  = require('express');
 const router   = express.Router();
 
/*************************************************
 * ROUTES
 ************************************************/
router.get('/', (req, res) => {
  res.render('home');
});

/*************************************************
 * Export Router
 ************************************************/
module.exports = router;