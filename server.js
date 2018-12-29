const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const { Place } = require('./models');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
