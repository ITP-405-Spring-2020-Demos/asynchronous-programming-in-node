const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./chinook.db');
let sql = 'SELECT * FROM playlists ORDER BY Name';

console.log('Running query...');
db.all(sql, [], (error, rows) => {
  if (error) {
    throw error;
  }

  rows.forEach((row) => {
    console.log(row.PlaylistId, row.Name);
  });

  console.log('Query finished');
});

console.log('Close database connection');
db.close();