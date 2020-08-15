/**************************************************
 * File:      functions.js
 * Purpose:   Site Function Declarations
 * Authors:   Anthony McGrath (anthony-kyle)
 *            Cameron Shaw    (camshaw11)
 *            Steven De Lacy  (steven-delacy)
 **************************************************/

const fs = require('fs');

function getRandomIndex(max){
  return Math.floor(Math.random() * max);
}

function getAllJokes(next, file = './data.json') {
	fs.readFile(file, (err, data) => {
		if (err) throw err
		const jokes = JSON.parse(data)
		next(jokes)
	})
}

function getJokeIndex(id, jokes){
	return jokes.jokes.findIndex(j => j.id === Number(id));
}

function getSingleJoke(remix, next, id = false) {
	getAllJokes((obj) => {
		const max = obj.jokes.length;
		let joke = {};
		if (id){
			index = getJokeIndex(id, obj);
			joke = obj.jokes[index];
		} else {
			joke = obj.jokes[getRandomIndex(max)];
			if (remix === 'on'){
				let secondJoke = obj.jokes[getRandomIndex(max)];
				joke.punchline = secondJoke.punchline;
			}
		}

		next(joke); 
	})
}

function addNewJoke(joke, next, file = false) {
  getAllJokes((obj) => {
		joke.id = obj.jokes.length;
		obj.jokes.push(joke);
		save(obj, next, (file ? file : undefined));
  })
}

function save(jokes, next, file = './data.json'){
	const saveJoke = JSON.stringify(jokes, null, 2)
	fs.writeFile(file, saveJoke , err => {
		if (err) {
			next('error')
			throw err
		} 
		next('success')
	})
}

function editJoke(joke, del, next, file = false){
	if (del) {
		deleteJoke(joke.id, next, (file ? file : undefined));
	} else {
		getAllJokes((obj)=>{
			const index = getJokeIndex(joke.id, obj);
			obj.jokes[index].setup = joke.setup;
			obj.jokes[index].punchline = joke.punchline;
			save(obj, next, (file ? file : undefined));
		}, (file ? file : undefined));
	}
}

function deleteJoke(joke, next, file = false){
	getAllJokes((obj)=>{
		const index = getJokeIndex(joke, obj);
		obj.jokes.splice(index, 1);
		save(obj, next, (file ? file : undefined));
	}, (file ? file : undefined));	
}

module.exports = {
  getRandomIndex, getAllJokes, getSingleJoke, addNewJoke, editJoke
}


