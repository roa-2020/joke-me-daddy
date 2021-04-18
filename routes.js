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

 const fn = require('./functions');
 
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
      punchline: joke.punchline,
      id: joke.id
    }
    if(remix == 'on') {
      viewData.remix = remix
    }
    res.render('home', viewData)
  }
  )
});

router.get('/add', (req,res) => {
  const save = req.query.save || false;
  const viewData = {
    title: "Add Joke",
    description: "Add a joke to our database and go down in comedy history",
  }
  if (save) {
    viewData.save = save;
  }
  res.render('add', viewData);
})

router.post('/add', (req,res) => {
  const joke = {
    setup: req.body.setup,
    punchline: req.body.punchline
  }
  fn.addNewJoke(joke, (status)=>{
    res.redirect('/add?save='+status);
  });
});

router.get('/edit/:id', (req,res) => {
  const id = req.params.id;
  fn.getSingleJoke(false, (joke)=>{
    const viewData = {
      title: "Add Joke",
      description: "Add a joke to our database and go down in comedy history",
      id: id,
      setup: joke.setup,
      punchline: joke.punchline
    }
    res.render('edit', viewData);
  }, id);
  
})

router.post('/edit/:id', (req,res) => {
  const del = req.body.delete;
  const joke = {
    id: req.params.id,
    setup: req.body.setup,
    punchline: req.body.punchline
  }
  fn.editJoke(joke, del, (result)=>{
    res.redirect('/add?save='+result);
  })
});

/*************************************************
 * Export Router
 ************************************************/
module.exports = router;