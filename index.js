const express = require('express');
const app = express();
const db = require('./db/db');
const router = require('./Router/router')
app.use(express.json());
app.use('/api/v1',router);
app.get('/', (req, res) => {
  res.send('Hello World!');
});
db();
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
