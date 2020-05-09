const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const typeDefs = gql`
    type Query {
        hello: String
    }
`;
const resolvers = {
    Query: {
        hello: () => 'Hello my lover!'
    }
};
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