const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './chinook.db'
  }
});

// Example 1: Returning a promise within a .then()
knex('playlists')
  .where('Name', 'TV Shows')
  .first()
  .then((playlist) => {
    return knex('playlist_track')
      .join('tracks', 'tracks.TrackId', '=', 'playlist_track.TrackId')
      .where('PlaylistId', playlist.PlaylistId);
  })
  .then((tracks) => {
    console.log('Total tracks: ', tracks.length);
  });

// Example 2: Calling .then() in a then()
knex('playlists')
  .where('Name', 'TV Shows')
  .first()
  .then((playlist) => {
    return knex('playlist_track')
      .join('tracks', 'tracks.TrackId', '=', 'playlist_track.TrackId')
      .where('PlaylistId', playlist.PlaylistId)
      .then((tracks) => {
        return {
          playlist, tracks
        };
      });
  })
  .then((result) => {
    const { playlist, tracks } = result;
    console.log(playlist.Name, tracks.length);
  });