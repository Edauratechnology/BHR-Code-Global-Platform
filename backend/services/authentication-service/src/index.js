const express = require('express');

const app = express();
const port = process.env.PORT || 4001;

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ service: 'authentication-service', status: 'ok' });
});

app.listen(port, () => {
  console.log('authentication-service listening on port ' + port);
});
