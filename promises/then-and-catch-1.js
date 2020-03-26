const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './chinook.db'
  }
});

// EXAMPLE 1 - then
knex('playlists')
  .where('PlaylistId', 3)
  .first()
  .then((playlist) => {
    console.log(playlist);
  });

// EXAMPLE 2 - then() error
knex('playlists')
  .where('id', 3) // wrong PK
  .first()
  .then((playlist) => {
    console.log(playlist);
  }, (error) => {
    console.log('There was an error', error);
  });

// EXAMPLE 3 - catch()
knex('playlists')
  .where('id', 3) // wrong PK
  .first()
  .then((playlist) => {
    console.log(playlist);
  })
  .catch((error) => {
    console.log('There was an error', error);
  });

// EXAMPLE 4 - then() chaining
knex('playlists')
  .where('PlaylistId', 3)
  .first()
  .then((playlist) => {
    return playlist.Name;
  })
  .then((playlistName) => {
    console.log(playlistName);
  });

// EXAMPLE 5 - error chaining - throwing in a catch
knex('playlists')
  .where('id', 3) // wrong PK
  .first()
  .then((playlist) => {
    console.log(playlist);
  })
  .catch((error) => {
    console.log('There was an error', error);
    throw 'hello';
  })
  .catch((error) => {
    console.log(error + '!!!');
  });

// EXAMPLE 6 - error chaining - not throwing in a catch
knex('playlists')
  .where('id', 3) // wrong PK
  .first()
  .then((playlist) => {
    console.log(playlist);
  })
  .catch((error) => {
    console.log('There was an error', error);
    return 'hello';
  })
  .then((greeting) => {
    console.log(greeting + ' 🙂');
  });