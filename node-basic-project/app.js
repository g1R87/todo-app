const fs = require('fs');

fs.readFile('./data.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('ERROR READING THE FILE');
    return;
  }

  console.log(data);
});
