
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('punchlines').del()
    .then(function () {
      // Inserts seed entries
      return knex('punchlines').insert([
        {id: 1, punchline: "No, I got them all cut!"},
        {id: 2, punchline: "So I packed up my stuff and right!"},
        {id: 3, punchline: "Act like a nut."},
        {id: 4, punchline: "They'd crack each other up."},
        {id: 5, punchline: "They're always up to something."},
        {id: 6, punchline: "Nobody knows."},
        {id: 7, punchline: "Well, I'm not going to spread it!"},
        {id: 8, punchline: "It was two tired."},
        {id: 9, punchline: "No, I don't think they'll fit me."},
        {id: 10, punchline: "Because then it would be a foot."},
        {id: 11, punchline: "People must be dying to get in."},
        {id: 12, punchline: "I didn't know it was on fire."},
        {id: 13, punchline: "Tooth hurt-y."},
        {id: 14, punchline: "Ten tickles."},
        {id: 15, punchline: "50 Cent featuring Nickelback!"},
        {id: 16, punchline: "You put a little boogie in it."},
        {id: 17, punchline: "Because of all of its problems!"},
        {id: 18, punchline: "Nacho cheese."},
        {id: 19, punchline: "Sneakers!"},
        {id: 20, punchline: "Igloos it together."},
        {id: 21, punchline: "11 years old and he still doesn't know my name is Brian."},
        {id: 22, punchline: "You go on ahead."},
        {id: 23, punchline: "Bob"},
        {id: 24, punchline: "I decided to smoke only after sex."},
        {id: 25, punchline: "Rubbit"},
        {id: 26, punchline: "Chewing gum"},
        {id: 27, punchline: "They're quite good, but they haven't got a Gig yet."},
        {id: 28, punchline: "swept the nation"},
        {id: 29, punchline: "You’re either on a roll or taking shit from someone."},
        {id: 30, punchline: "It’s not hard."},
        {id: 31, punchline: "On so many levels."},
        {id: 32, punchline: "She worked with dumbbells."},
        {id: 33, punchline: "Brrrroooom, brrroooom."},
        {id: 34, punchline: "The third guy ducked."},
        {id: 35, punchline: "I said maybe"},
        {id: 36, punchline: "The fiddlers."},
        {id: 37, punchline: "Sometimes he laughs"},
        {id: 38, punchline: "When the punchline becomes apparent."}
      ]);
    });
};
