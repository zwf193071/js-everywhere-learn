const { gql } = require('apollo-server-express');

module.exports = gql`
  scalar DateTime

  type Query {
    notes:[Note!]!
    note(id:ID!):Note!
  }
  type User {
    id:ID!
    username:String!
    email:String!
    avatar:String
    notes:[Note!]!
  }
  type Note {
    id:ID!
    content:String!
    author:User!
    createdAt:DateTime!
    updatedAt:DateTime!
  }
  type Mutation {
    newNote(content:String!):Note!
    updateNote(id:ID!,content:String!):Note!
    deleteNote(id:ID!):Boolean!
    passwordEncrypt(passowrd:String!):String!
    signUp(username: String!, email: String!, password: String!): String!
    signIn(username:String,email:String,password:String!):String!
  }
`;
