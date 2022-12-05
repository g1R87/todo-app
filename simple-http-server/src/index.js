const http = require('http');
const handler = require('./routes');

const server = http.createServer(handler);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});
