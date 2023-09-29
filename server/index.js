// import { express } from 'express';
const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('./routes/auth.routes');

const app = express();
const PORT = config.get('serverPort');

app.use(express.json());
app.use('/api/auth', authRouter);

const start = () => {
  try {
    const dbc = async () => {
      await mongoose.connect(config.get('modb'));
    } 
    console.log(dbc);
    app.listen(PORT, () => {
      console.log('Server started on port: ', PORT);
    });
  } catch (e) {
    console.log(':Error App: mongoos connect');
  }
}

start();
