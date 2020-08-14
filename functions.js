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

function addNewJoke() {
  getAllJokes((obj)=>{
    console.log(obj.jokes)
    // fs.writeFileSync('./data.json', JSON.stringify([{}]) , 'utf-8') {
    // const jokes = []  
    // const map = jokes.jokes.map(???)
    // }
    //idk if this is on the right track?

  })
}

console.log(addNewJoke())

module.exports = {
  getRandomIndex, getAllJokes, getSingleJoke, addNewJoke
}


