const express = require('express');

const app = express();
const port = process.env.PORT || 4003;

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ service: 'talent-service', status: 'ok' });
});

app.listen(port, () => {
  console.log('talent-service listening on port ' + port);
});
