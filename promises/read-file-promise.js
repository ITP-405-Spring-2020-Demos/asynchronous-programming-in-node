const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

// Success example
readFile('./package.json', 'utf8')
  .then((contents) => {
    console.log(contents);
  })
  .catch((error) => {
    console.error('File not found', error);
  });

// Error example (mispelled file name)
readFile('./package.jsonf', 'utf8')
  .then((contents) => {
    console.log(contents);
  }, (error) => {
    console.error('File not found', error);
  });