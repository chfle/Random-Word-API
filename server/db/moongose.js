'use strict';

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/randomWord', { useNewUrlParser: true });

module.exports = { mongoose };
