const express = require('express');

const app = express();
const port = process.env.PORT || 4005;

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ service: 'content-cms-service', status: 'ok' });
});

app.listen(port, () => {
  console.log('content-cms-service listening on port ' + port);
});
