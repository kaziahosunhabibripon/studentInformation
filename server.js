const express = require('express');
const {ApolloServer, gql} =require("apollo-server-express");
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { GraphQLObjectType } = require('graphql');
const GraphQLEmail =require('graphql-type-email');
dotenv.config();
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const port = process.env.PORT || 4000;
const cors = require('cors');

// Database connected
const URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ukcgu.mongodb.net/StudentInformationDB?retryWrites=true&w=majority`

mongoose.connect(URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true, 
  
}, ()=>console.log("Connected to Mongoose with MongoDB"));

mongoose.set('useCreateIndex', true);

const startServer = async (req, res) => {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs, 
        resolvers,
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({app: app});
    app.use((req, res) => {
        res.send("Working with Apollo express server");
    })
    app.listen(process.env.PORT || port,()=>console.log(`Server Working on port ${port}`));
}
startServer();