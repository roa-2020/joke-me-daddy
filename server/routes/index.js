/**************************************************
 * File:      routes.js
 * Purpose:   Application Route Definitions
 * Authors:   Anthony McGrath (anthony-kyle)
 *            Cameron Shaw    (camshaw11)
 *            Steven De Lacy  (steven-delacy)
 **************************************************/

// Define Requirements
const express = require('express')
const router = express.Router()

const fn = require('../../functions')

const {
  getAllSetups,
  getSetupById,
  getSetupCount,
  getPunchlineCount,
  getAllPunchlines,
  getPunchlineById,
  getAllJokes,
  getJokeById,
  countAllJokes,
  addJoke,
  updateJoke,
  deleteJoke
} = require('../db/jokes')

/*************************************************
 * ROUTES
 ************************************************/

router.get('/', (req, res) => {
  const remix = req.query.remix || 'off'

  const viewData = {
    title: 'Home',
    description: 'Your favourite Random Joke Generator'
  }

  if (remix == 'on') {
    viewData.remix = remix
    getSetupCount()
      .then(setup_count => {
        getPunchlineCount()
          .then(punchline_count => {
            getAllSetups()
              .then(setups => {
                let index = Math.floor(Math.random() * setup_count.c)
                viewData.setup = setups[index].setup
                viewData.id = setups[index].id
                getAllPunchlines()
                  .then(punchlines => {
                    index = Math.floor(Math.random() * punchline_count.c)
                    viewData.punchline = punchlines[index].punchline

                    res.render('home', viewData)
                  })
                  .catch(errorHandler)
              })
              .catch(errorHandler)
          })
          .catch(errorHandler)
      })
      .catch(errorHandler)
  } else {
    countAllJokes()
      .then(count => {
        const joke_index = Math.floor(Math.random() * count.c)
        getAllJokes()
          .then(jokes => {
            viewData.setup = jokes[joke_index].setup
            viewData.punchline = jokes[joke_index].punchline
            viewData.id = jokes[joke_index].id

            res.render('home', viewData)
          })
          .catch(errorHandler)
      })
      .catch(errorHandler)
  }
})

router.get('/add', (req, res) => {
  const save = req.query.save || false
  const viewData = {
    title: 'Add Joke',
    description: 'Add a joke to our database and go down in comedy history'
  }
  if (save) {
    viewData.save = save
  }
  res.render('add', viewData)
})

router.post('/add', (req, res) => {
  const joke = {
    setup: req.body.setup,
    punchline: req.body.punchline
  }

  addJoke(joke)
    .then(id => {
      res.redirect('/add?save=success')
    })
    .catch(err => {
      console.error(err)
      res.redirect('/add?save=error')
    })
})

router.get('/edit/:id', (req, res) => {
  const id = req.params.id
  getJokeById(id).then(joke => {
    const viewData = {
      title: 'Add Joke',
      description: 'Add a joke to our database and go down in comedy history',
      id: id,
      setup: joke.setup,
      punchline: joke.punchline
    }
    res.render('edit', viewData)
  })
})

router.post('/edit/:id', (req, res) => {
  const id = req.params.id
  const del = req.body.delete
  const secret = req.body.secret
  const auth = 'ZLvA#Wr&6rMC2uUQ^w@j#o^$m'

  if (secret === auth) {
    if (del == 'on') {
      deleteJoke(id)
        .then(status => {
          res.redirect('/add?save=' + (status == 1 ? 'success' : 'error'))
        })
        .catch(errorHandler)
    } else {
      const joke = {
        id: id,
        setup: req.body.setup,
        punchline: req.body.punchline
      }
      updateJoke(joke)
        .then(status => {
          res.redirect('/add?save=' + (status == 1 ? 'success' : 'error'))
        })
        .catch(errorHandler)
    }
  } else {
    res.redirect('/add?save=unauthorised')
  }
})

function errorHandler (err) {
  console.error(err)
}

/*************************************************
 * Export Router
 ************************************************/
module.exports = router
