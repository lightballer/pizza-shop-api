const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const routes = require('./src/routes/index');

const app = express();

const PORT = process.env.PORT || 5000;

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to DB');
  }
);
const db = mongoose.connection;
db.on('error', error => console.error(error));

app.use(express.json());

routes(app);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
