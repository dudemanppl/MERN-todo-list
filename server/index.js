const express = require('express');
const router = require('./router.js');

const app = express();
const port = 3000;

app.use('/api', router);

app.listen(port, err => {
  if (err) console.log(err);
  console.log(`Connected to Express on port ${port}`);
});

