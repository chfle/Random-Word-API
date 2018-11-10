'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/moongose');
const { Word } = require('./models/word');

const app = express();
app.use(bodyParser.json());

app.post('/data', async (req, res) => {
  try {
    const yourData = new Word({ word: req.body.word });
    const data = await yourData.save();
    res.status(200).send(data);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

app.get('/data', async (reg, res) => {
  try {
    const data = await Word.find();

    res.status(200).send({
      word: data[0].word,
    });

    await Word.findOneAndDelete({ word: data[0].word });

    const word = new Word({ word: data[0].word });

    await word.save();
  } catch (e) {
    res.status(404).send(e);
  }
});

app.listen(4000, () => {
  console.log('server on 4000');
});
