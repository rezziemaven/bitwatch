'use strict';
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bitwatch_20181005', (err) => {
  if (err) console.error('Error in connection: ',err);
  else console.log('Connected to mongo');
});