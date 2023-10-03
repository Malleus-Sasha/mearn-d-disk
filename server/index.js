// import { express } from 'express';
const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('./routes/auth.routes');
const corsMiddleware = require('./middleware/cors.middleware');

const app = express();
const PORT = config.get('serverPort');

app.use(corsMiddleware);
app.use(express.json());
app.use('/api/auth', authRouter);

const start = async () => {
  try {
    await mongoose.connect(config.get('modb'));
    // console.log(dbConect);
    
    app.listen(PORT, () => {
      console.log('Server started on port: ', PORT);
    });
  } catch (e) {
    console.log(':Error App: mongoos connect');
  }
}

start();

/*
email:"test1@test.com"
password:"1234"
*/
