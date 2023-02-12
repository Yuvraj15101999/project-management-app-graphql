const mongoose = require("mongoose");
require("dotenv").config();

const mongooseConnectionString =
  "mongodb+srv://yuvraj-umesh-pawar-15101999:hardwork100@cluster0.n9oqbpj.mongodb.net/mgmt_db?retryWrites=true&w=majority";

const connectDB = async () => {
  const conn = await mongoose.connect(mongooseConnectionString);

  console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;