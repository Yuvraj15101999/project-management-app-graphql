const express = require('express');
require('dotenv').config() ;
const colors = require('colors');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT||5000;
const cors = require('cors'); 
const app = express();

//connect to database
connectDB();
app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true ,
}));
app.listen(port,console.log(`Server running on ${port}`));