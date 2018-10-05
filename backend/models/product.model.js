'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require ('../db');

const productSchema = new Schema({
  product_name: {
    type: String,
    required: [true, 'Why no product name?']
  },
  price_BFX: {
    type: Number,
    default: 0,
  },
  price_BNB: {
    type: Number,
    default: 0
  },
  price_BTX: {
    type: Number,
    default: 0
  },
  created_at: {
    type: Date,
    default: new Date()
  },
  updated_at: {
    type: Date,
    default: new Date()
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;