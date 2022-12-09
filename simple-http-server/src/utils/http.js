function parseBody(req) {
  return new Promise((resolve, reject) => {
    try {
      let body = '';
      req.on('data', (buffer) => {
        body += buffer.toString();
      });

      req.on('end', () => {
        body = JSON.parse(body);

        resolve(body);
      });
    } catch (error) {
      reject(new Error('Error parsing req body'));
    }
  });
}

module.exports = { parseBody };
