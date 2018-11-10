'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listSchema = new Schema({
  word: String,
});

const Word = mongoose.model('words', listSchema);

module.exports = { Word };
