const fs = require('fs');

console.log(1);
fs.readFile('./package.json', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  
  console.log(data);
});
console.log(2);
