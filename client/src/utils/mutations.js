import { gql } from "@apollo/client";

export const CREATE_POST = gql`
mutation CreatePost($postTitle: String!, $description: String!, $author: String!, $userId: String!) {
  createPost(postTitle: $postTitle, description: $description, author: $author, userId: $userId) {
    _id
    postTitle
    description
    author
    createdAt
  }
}
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

