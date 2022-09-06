const express = require('express');
const cors = require('cors');

const gameController = require('./controllers/gameController');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/games', gameController);

app.get('/', (request, response) => {
  response
    .status(200)
    .send(
      "Welcome to my Video Game Site! This Site is to Show What Games I've Played Over the Years.",
    );
});

app.get('*', (request, response) => {
  response.status(404).send('Oops, Something Went Wrong With Your Request!');
});

module.exports = app;
