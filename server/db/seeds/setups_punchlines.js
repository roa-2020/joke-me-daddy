exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('setups_punchlines')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('setups_punchlines').insert([
        { setup_id: 1, punchline_id: 1 },
        { setup_id: 2, punchline_id: 2 },
        { setup_id: 3, punchline_id: 3 },
        { setup_id: 4, punchline_id: 4 },
        { setup_id: 5, punchline_id: 5 },
        { setup_id: 6, punchline_id: 6 },
        { setup_id: 7, punchline_id: 7 },
        { setup_id: 8, punchline_id: 8 },
        { setup_id: 9, punchline_id: 9 },
        { setup_id: 10, punchline_id: 10 },
        { setup_id: 11, punchline_id: 11 },
        { setup_id: 12, punchline_id: 12 },
        { setup_id: 13, punchline_id: 13 },
        { setup_id: 14, punchline_id: 14 },
        { setup_id: 15, punchline_id: 15 },
        { setup_id: 16, punchline_id: 16 },
        { setup_id: 17, punchline_id: 17 },
        { setup_id: 18, punchline_id: 18 },
        { setup_id: 19, punchline_id: 19 },
        { setup_id: 20, punchline_id: 20 },
        { setup_id: 21, punchline_id: 21 },
        { setup_id: 22, punchline_id: 22 },
        { setup_id: 23, punchline_id: 23 },
        { setup_id: 24, punchline_id: 24 },
        { setup_id: 25, punchline_id: 25 },
        { setup_id: 26, punchline_id: 26 },
        { setup_id: 27, punchline_id: 27 },
        { setup_id: 28, punchline_id: 28 },
        { setup_id: 29, punchline_id: 29 },
        { setup_id: 30, punchline_id: 30 },
        { setup_id: 31, punchline_id: 31 },
        { setup_id: 32, punchline_id: 32 },
        { setup_id: 33, punchline_id: 33 },
        { setup_id: 34, punchline_id: 34 },
        { setup_id: 35, punchline_id: 35 },
        { setup_id: 36, punchline_id: 36 },
        { setup_id: 37, punchline_id: 37 },
        { setup_id: 38, punchline_id: 38 }
      ])
    })
}
