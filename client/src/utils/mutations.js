import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation CreatePost($description: String!, $postTitle: String) {
    createPost(description: $description, postTitle: $postTitle) {
      description
      postTitle
      _id
    }
  }
`;

