/**
 * Jokes.js 
 */

const connection = require('./connection')


function getAllSetups(db = connection) {
  return db('setups')
}

function getSetupById(id, db = connection){
  return db('setups')
    .where('id', id)
    .first()
}

function getSetupCount(db = connection){
  return db('setups').count('id', {as: 'count'}).first();
}

function getAllPunchlines(db = connection) {
  return db('punchlines')
}

function getPunchlineById(id, db = connection){
  return db('punchlines')
    .where('id', id)
}

function getPunchlineCount(db = connection){
  return db('punchlines').count('id', {as: 'count'}).first();
}

function getAllJokes(db = connection){
  return db('setups_punchlines')
    .join('setups', 'setups_punchlines.setup_id', 'setups.id')
    .join('punchlines', 'setups_punchlines.punchline_id', 'punchlines.id')
}

function getJokeById(id, db = connection){
  return db('setups_punchlines')
    .where('setups_punchlines.id', id)
    .join('setups', 'setups_punchlines.setup_id', 'setups.id')
    .join('punchlines', 'setups_punchlines.punchline_id', 'punchlines.id')
}

function countAllJokes(db = connection){
  return db('setups_punchlines').count('id', {as: 'count'}).first();
}

module.exports = {
  getAllSetups,
  getSetupById,
  getSetupCount,
  getAllPunchlines,
  getPunchlineById,
  getPunchlineCount,
  getAllJokes,
  getJokeById,
  countAllJokes
}