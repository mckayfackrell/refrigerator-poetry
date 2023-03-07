import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_POSTS = gql`
query AllPosts {
  allPosts {
    _id
    postTitle
    description
    createdAt
    comments {
      _id
      comment
      createdAt
    }
  }
}
`;


