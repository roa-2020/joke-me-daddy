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
  return db('setups').count('id', {as: 'c'}).first();
}

function getAllPunchlines(db = connection) {
  return db('punchlines')
}

function getPunchlineById(id, db = connection){
  return db('punchlines')
    .where('id', id)
    .first()
}

function getPunchlineCount(db = connection){
  return db('punchlines').count('id', {as: 'c'}).first();
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
    .first()
}

function countAllJokes(db = connection){
  return db('setups_punchlines').count('id', {as: 'c'}).first();
}

function addJoke(joke, db = connection){
  return insertSetup(joke.setup).then(setup_id => {
    return insertPunchline(joke.punchline).then(punchline_id => {
      return db('setups_punchlines').insert({setup_id, punchline_id})
    }).catch(err => {console.log(err)})
  }).catch(err => {console.log(err)})
}

function insertSetup(setup, db = connection){
  return db('setups').insert({'setup': setup})
}

function insertPunchline(punchline, db = connection){
  return db('punchlines').insert({'punchline': punchline})
}

function updateJoke(joke, db = connection){
  return db('setups_punchlines')
    .where('id', joke.id)
    .first()
    .then(join => {
      return db('setups')
        .update('setup', joke.setup)
        .where('id', join.setup_id)
        .then(id => {
          return db('punchlines')
            .update('punchline', joke.punchline)
            .where('id', join.punchline_id)
        })
    })
}

function deleteJoke(joke_id, db = connection){
  return db('setups_punchlines')
    .where('id', joke_id)
    .first()
    .then(join => {
      return db('setups')
        .where('id', join.setup_id)
        .del()
        .then(status => {
          return db('punchlines')
            .where('id', join.punchline_id)
            .del()
            .then(status => {
              return db('setups_punchlines')
                .where('id', joke_id)
                .del()
            })
        })
    })
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
  countAllJokes,
  addJoke,
  updateJoke,
  deleteJoke
}