const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./chinook.db');
let sql = 'SELECT * FROM playlists WHERE PlaylistId = ?';

console.log('Running query...');
let playlistId = 1;
db.get(sql, [playlistId], (error, row) => {
  if (row) {
    console.log(row.Name);
  } else {
    console.log(`No playlist found with an id of ${playlistId}`);
  }
  
  console.log('Query finished');
});

console.log('Close database connection');
db.close();