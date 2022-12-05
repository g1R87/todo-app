const fs = require('fs');

//fs.writeFile('./qn1.txt', 'Prashant', (err) => {
//if (err) {
//console.log('ERROR WRITING ON THE FILE');
//}
//});
//
//

const data = fs.readFileSync('./qn1.txt', 'utf8');

console.log(data);
