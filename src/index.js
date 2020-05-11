const { ApolloServer} = require('apollo-server-express');
const express = require('express');
const app = express();
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
require('dotenv').config();
const db = require('./db');
const DB_HOST = process.env.DB_HOST;
const port = process.env.PORT || 4000;
db.connect(DB_HOST);
const server = new ApolloServer({
    typeDefs,
    resolvers
});
server.applyMiddleware({
    app,
    path: '/api'
});
app.listen({ port }, () => {
    console.log(
        `GraphQL Server running at
        http://localhost:${port}${server.graphqlPath}`
    )
});