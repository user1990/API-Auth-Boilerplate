const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const Promise = require('bluebird');
const mongoose = require('mongoose');
const keys = require('./api/config/keys');
const cors = require('cors');
const app = express();

// MongoDb connection
mongoose.Promise = Promise;
if (process.env.NODE_ENV === 'test') {
  mongoose.connect(keys.MONGO_DB_URI_TEST);
} else {
  mongoose.connect(keys.MONGO_DB_URI);
}
// Middlewares
if (!process.env.NODE_ENV === 'test') {
  app.use(logger('dev'));
}
app.use(cors({ credentials: true }));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
const productRoutes = require('./api/routes/users');

app.use('/users', productRoutes);

// Error handling
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
