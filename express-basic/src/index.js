const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send({
    status: 'Success',
    payload: {
      message: 'Hello World',
    },
  });
});

app.get('/health', (req, res) => {
  res.send({
    status: 'Success',
    payload: {
      message: '[APP HEALTH]: App running well',
    },
  });
});

app.post('/todo', (req, res) => {
  console.log(req.body);

  res.send({
    status: 'Success',
    payload: req.body,
  });
});

/*
 * DELETE <entity>/<id>
 * DELETE todo/123
 */

app.patch('/todo/:id', (req, res) => {
  console.log(req.params.id);

  res.send(successfulResponse({ id: req.params.id, body: req.body }));
});

function successfulResponse(payload) {
  return {
    status: 'Success',
    payload,
  };
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
