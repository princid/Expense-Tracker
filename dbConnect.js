const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

/* TODO => Entire link has to be a .env variable instead of just username and password */
mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mjocc.mongodb.net/test`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);


const connection = mongoose.connection

connection.on('connected', () =>
  console.log('Mongo DB Connection Successfull')
);

connection.on('connected' , () => console.log('Mongo DB Connection Successfull'))
