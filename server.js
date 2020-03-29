//dependencies
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

//PORT
const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(logger('dev'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require('./routes/api-routes.js'));
app.use(require('./routes/html-routes.js'));

//listener
app.listen(PORT, () => { console.log(`App running on port ${PORT}!`); });