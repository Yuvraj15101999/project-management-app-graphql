const mongoose = require('mongoose');
require('dotenv').config({path:'../.env'});

const mongooseConnectionString =
  "";

const connectDB = async () => {
  const conn = await mongoose.connect(mongooseConnectionString);
  
  console.log(process.env.MONGO_URI)
  console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
