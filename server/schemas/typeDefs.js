const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    posts: [Post]
  }

  type Post {
    _id: ID!
    title: String
    description: String!
    createdAt: Date
    comments: [Comment]
  }

  type Query {
    posts: [Post]
    post(_id: String): [Post]
  }

  type Mutation {

    createPost(title: String, description: String!): Post
    editPost(title: String, description: String!): Post
    deletePost(): Post

    createUser(): User
  }
`;

/* const typeDefs = gql`
  type Tech {
    _id: ID!
    name: String!
  }

  type Matchup {
    _id: ID!
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
  }

  type Query {
    tech: [Tech]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
`; */

module.exports = typeDefs;
