const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './chinook.db'
  }
});

async function main() {
  try {
    const playlist = await knex('playlists')
      .where('id', 3)
      .first();

    console.log(playlist);
  } catch(error) {
    console.log('There was an error');
  }
}

main();