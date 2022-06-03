const mongoose = require('mongoose')

mongoose.connect(
  "mongodb+srv://gagnam:prince55@cluster0.mjocc.mongodb.net/test",
  { useNewUrlParser: true, useUnifiedTopology: true }
);


const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected' , () => console.log('Mongo DB Connection Successfull'))