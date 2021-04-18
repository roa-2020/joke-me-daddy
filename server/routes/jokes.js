const express = require("express")

const {
  getAllSetups,
  getSetupById,
  getSetupCount,
  getPunchlineCount,
  getAllPunchlines,
  getPunchlineById,
  getAllJokes,
  getJokeById,
  countAllJokes
} = require("../db/jokes")

const router = express.Router()
const path = require("path")

router.get("/", getJokes)
router.post("/", createJoke)
router.get("/count", countJokes)
router.get("/punchline", getPunchlines)
router.get("/punchline/count", countPunchlines)
router.get("/punchline/:id", getPunchline)
router.get("/setup", getSetups)
router.get("/setup/count", countSetup)
router.get("/setup/:id", getSetup)
router.get("/:id", getJoke)
router.patch("/:id", updateJoke)
router.delete("/:id", deleteJoke)


function countJokes(req,res){
  return countAllJokes().then(count => {
    return res.json(count)
  })
}
function getJokes(req, res){
  return getAllJokes().then(jokes => {
    return res.json(jokes)
  })
}

function getJoke(req, res){
  const joke_id = req.params.id
  return getJokeById(joke_id).then(joke => {
    return res.json(joke);
  })
}

function countSetup(req, res){
  return getSetupCount().then(count => {
    return res.json(count)
  })
}

function countPunchlines(req, res){
  return getPunchlineCount().then(count => {
    return res.json(count)
  })
}

function getSetups(req,res){
  return getAllSetups().then(setups => {
    return res.json(setups)
  })
}

function getSetup(req, res){
  const setup_id = req.params.id
  return getSetupById(setup_id).then(setup => {
    return res.json(setup);
  })
}

function getPunchlines(req, res){
  return getAllPunchlines().then(punchlines => {
    return res.json(punchlines)
  })
}

function getPunchline(req, res){
  const punchline_id = req.params.id
  return getPunchlineById(punchline_id).then(punchline => {
    return res.json(punchline);
  })
}

function createJoke(req, res){
  return res.json({error: 'To Do'})
}
function updateJoke(req, res){
  return res.json({error: 'To Do'})
}

function deleteJoke(req, res){
  return res.json({error: 'To Do'})
}


/*************************************************
 * Export Router
 ************************************************/
 module.exports = router;