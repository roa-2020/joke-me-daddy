
exports.seed = (knex)=>{
  // Deletes ALL existing entries
  return knex("setups").del()
    .then(function () {
      // Inserts seed entries
      return knex("setups").insert([
        {id: 1, setup: "Dad, did you get a haircut?"},
        {id: 2, setup: "My wife is really mad at the fact that I have no sense of direction."},
        {id: 3, setup: "How do you get a squirrel to like you?"},
        {id: 4, setup: "Why don't eggs tell jokes?"},
        {id: 5, setup: "I don't trust stairs."},
        {id: 6, setup: "I don't trust stairs."},
        {id: 7, setup: "Did you hear the rumor about butter?"},
        {id: 8, setup: "Why couldn't the bicycle stand up by itself?"},
        {id: 9, setup: "Dad, can you put my shoes on?"},
        {id: 10, setup: "Why can't a nose be 12 inches long?"},
        {id: 11, setup: "This graveyard looks overcrowded."},
        {id: 12, setup: "Dad, can you put the cat out?"},
        {id: 13, setup: "What time did the man go to the dentist?"},
        {id: 14, setup: "How many tickles does it take to make an octopus laugh?"},
        {id: 15, setup: "What concert costs just 45 cents?"},
        {id: 16, setup: "How do you make a tissue dance?"},
        {id: 17, setup: "Why did the math book look so sad?"},
        {id: 18, setup: "What do you call cheese that isn't yours?"},
        {id: 19, setup: "What kind of shoes do ninjas wear?"},
        {id: 20, setup: "How does a penguin build its house?"},
        {id: 21, setup: "Today, my son asked 'Can I have a book mark?' and I burst into tears."},
        {id: 22, setup: "What did the shoe say to the confused hat?"},
        {id: 23, setup: "What do you call a man with no arms or legs in the middle of the ocean?"},
        {id: 24, setup: "How did you quit smoking?"},
        {id: 25, setup: "What does a perverted frog say?"},
        {id: 26, setup: "What goes in hard and dry then comes out wet and soft?"},
        {id: 27, setup: "Have you heard of the band 1023MB?"},
        {id: 28, setup: "The invention of the broom really..."},
        {id: 29, setup: "How is life like toilet paper?"},
        {id: 30, setup: "How do you spot a blind man on a nude beach?"},
        {id: 31, setup: "Having sex in an elevator is wrong."},
        {id: 32, setup: "Why was the weightlifter upset?"},
        {id: 33, setup: "What kind of noise does a witch’s vehicle make?"},
        {id: 34, setup: "Two guys walked into a bar."},
        {id: 35, setup: "My wife asked me to stop singing “Wonderwall” to her."},
        {id: 36, setup: "What part of the Orchestra can't you trust?"},
        {id: 37, setup: "I love telling dad jokes..."},
        {id: 38, setup: "When does a joke become a dad joke?"}
      ]);
    });
};
