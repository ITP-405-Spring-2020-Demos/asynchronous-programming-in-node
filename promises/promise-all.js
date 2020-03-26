const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './chinook.db'
  }
});

const playlistId = 3;

const playlistPromise = knex('playlists')
  .where('PlaylistId', playlistId)
  .first();

const tracksPromise = knex('playlist_track')
  .join('tracks', 'tracks.TrackId', '=', 'playlist_track.TrackId')
  .where('PlaylistId', playlistId);

Promise.all([playlistPromise, tracksPromise]).then((queries) => {
  let [ playlist, tracks ] = queries;
  console.log(playlist.Name, tracks.length);
});