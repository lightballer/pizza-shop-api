const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const errorHandler = require('./src/middlewares/error-handler.middleware');

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
app.use(
  cors({
    origin: '*',
  })
);

for (const route in routes) {
  app.use(route, routes[route]);
}

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
