const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './chinook.db'
  }
});

// Same as second example in then-and-catch-2.js
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


async function main() {
  try {
    const playlist = await knex('playlists')
      .where('Name', 'TV Shows')
      .first();

    const tracks = await knex('playlist_track')
      .join('tracks', 'tracks.TrackId', '=', 'playlist_track.TrackId')
      .where('PlaylistId', playlist.PlaylistId);

    console.log(playlist.Name, tracks.length);
  } catch(error) {
    console.log('There was an error');
  }
}

main();