const express = require('express');

const app = express();
const port = process.env.PORT || 4004;

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ service: 'partner-service', status: 'ok' });
});

app.listen(port, () => {
  console.log('partner-service listening on port ' + port);
});
