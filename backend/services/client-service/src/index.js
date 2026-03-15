const express = require('express');

const app = express();
const port = process.env.PORT || 4002;

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ service: 'client-service', status: 'ok' });
});

app.listen(port, () => {
  console.log('client-service listening on port ' + port);
});
