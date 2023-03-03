const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    posts: [String]
  }

  type Post {
    _id: ID!
    postTitle: String
    description: String!
  }

  type Query {
    allPosts: [Post]
    allUsers: [User]
    postById(_id: ID!): Post
    userById(_id: ID!): User
  }

  type Mutation {
    createPost(postTitle: String, description: String!): Post
    editPost(_id: ID!, postTitle: String, description: String): Post
    deletePost(_id: ID!): Post
    editUserPosts(_id: ID!, postId: ID!): User
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
