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

 const fn = require('./functions')
 
/*************************************************
 * ROUTES
 ************************************************/

router.get('/', (req, res) => {
  const remix = req.query.remix || 'off';
  fn.getSingleJoke(remix, (joke)=>{
    const viewData = {
      title: "Home",
      description: "Your favourite Random Joke Generator",
      setup: joke.setup,
      punchline: joke.punchline
    }
    if(remix == 'on') {
      viewData.remix = remix
    }
    res.render('home', viewData)
  }
  )
});

router.get('/add', (req,res) => {
  const viewData = {
    title: "Add Joke",
    description: "Add a joke to our database and go down in comedy history",
  }
  res.render('add', viewData);
})

/*************************************************
 * Export Router
 ************************************************/
module.exports = router;