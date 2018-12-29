const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const { placeRouter } = require('./routes/place');

const { Place } = require('./models');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use('/place', placeRouter);

app.get('/', (req, res) => {
  res.send(`Welcome to your places!`)
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
