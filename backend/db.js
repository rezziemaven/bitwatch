'use strict';
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bitwatch_20181005', (err) => {
  if (err) console.error('Error in connection: ',err); // eslint-disable-line no-console
  else console.log('Connected to mongo'); // eslint-disable-line no-console
});