const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

// Ensure password is URL-encoded if it contains special characters
const dbUsername = process.env.DB_USERNAME;
const dbPassword = encodeURIComponent(process.env.DB_PASSWORD);
const dbName = 'expense'; // replace with your actual database name
const dbHost = 'cluster0.mjocc.mongodb.net';

mongoose.connect(
  `mongodb+srv://${dbUsername}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);


const connection = mongoose.connection

connection.on('connected', () =>
  console.log('Mongo DB Connection Successfull')
);