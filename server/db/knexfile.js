// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    version: '8',
    connection: {
      host: 'localhost',
      user: 'localdev',
      password: '#Yfc55mwWdZRn9k45dd5u!qi9',
      database: 'jokemedaddy'
    },
  },

  staging: {
   client: 'mysql',
    version: '8',
    connection: {
      host: 'localhost',
      user: 'localdev',
      password: '#Yfc55mwWdZRn9k45dd5u!qi9',
      database: 'jokemedaddy'
    },
  },

  production: {
    client: 'mysql',
    version: '5',
    connection: {
      host: 'localhost',
      user: 'anthonyk_jmd',
      password: 'VCuDnd5My2X7S@ZEC77Vd%ZaN61fl&',
      database: 'anthonyk_jokemedaddy'
    },
  }

};
