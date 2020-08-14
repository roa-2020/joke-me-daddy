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

function getSingleJoke(remix, next) {
    getAllJokes((obj) => {
      const max = obj.jokes.length;
      let joke = obj.jokes[getRandomIndex(max)];
      if (remix === 'on'){
				let secondJoke = obj.jokes[getRandomIndex(max)];
				joke.punchline = secondJoke.punchline;
      }
			next(joke); 
		})
}

function addNewJoke(joke, next, file = './data.json') {
  getAllJokes((obj) => {
		obj.jokes.push(joke)
		let saveJoke = JSON.stringify(obj, null, 2)

    fs.writeFile(file, saveJoke , err => {
			if (err) {
				next('error')
				throw err
			} 
			next('success')
    })
  })
}

module.exports = {
  getRandomIndex, getAllJokes, getSingleJoke, addNewJoke
}


