const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./chinook.db');

class Playlist {
  static findRecord(id) {
    let sql = 'SELECT * FROM playlists WHERE PlaylistId = ?';
  
    return new Promise((resolve, reject) => {
      db.get(sql, [id], (error, row) => {
        if (error) {
          reject(error);
        }
  
        if (row) {
          resolve(row);
        } else {
          reject('Playlist not found');
        }
      });
    });
  }
}

Playlist.findRecord(1).then((playlist) => {
  console.log(playlist);
});

Playlist.findRecord('asdf').catch((errorMessage) => {
  console.log(errorMessage);
});

module.exports = Playlist;