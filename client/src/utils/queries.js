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
      author
      comments {
        _id
        comment
        createdAt
      }
    }
  }
`;

export const QUERY_USERBYID = gql`
query Userbyid($id: ID!) {
  userbyid(_id: $id) {
    _id
    email
    username
    posts {
      postTitle
      description
      createdAt
    }
  }
}
`;