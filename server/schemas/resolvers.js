const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require("../models");
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    allUsers: async () => {
      return User.find({});
    },
    allPosts: async () => {
      return Post.find({});
    },
    postById: async (_parent, { _id }) => {
      return Post.findById(_id);
    },
    /* userbyid: async (_parent, { _id }) => {
      return User.findById(_id);
    }, */
    userbyid: async (_parent, { _id }) => {
      return User.findById(_id).populate('posts');
    }
    // userposts: async (parent, { _id }) => {
    //   const params = _id ? { _id } : {};
    //   return User.find(params);
    // },
  },
  Mutation: {
    createPost: async (_parent, { userId, postTitle, description, author }) => {
      const newPost = await Post.create({postTitle, description, author});
      const assignedPost = await User.findByIdAndUpdate(
        userId, 
        { $addToSet: { posts: newPost._id }},
        { new: true }
        );

      return newPost;
    },

    editPost: async (_parent, { _id, postTitle, description }) => {
      const updatedPost = await Post.findByIdAndUpdate(
        _id,
        { postTitle: postTitle, description: description },
        { new: true }
      );
      return updatedPost;
    },

    deletePost: async (_parent, { _id }) => {
      const postToDelete = await Post.findByIdAndDelete(_id);
      return postToDelete;
    },

    editUserPosts: async (_parent, { _id, postId }) => {
      const updatedUser = await User.findByIdAndUpdate(
        _id,
        { $addToSet: { posts: [postId] } },
        { new: true }
      );
      return updatedUser;
    },

    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user};
    },
    
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if(!user) {
        throw new AuthenticationError('No user with this email');
      }
      const correctPw = await user.isCorrectPassword(password);
      console.log("correctPw " + correctPw);

      if(!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    }

    //   createUser: async (parent, args) => {
    //     const newUser = await User.create(args);
    //     return newUser;
    //   },
  },
};

/* createMatchup: async (parent, args) => {
  const matchup = await Matchup.create(args);
  return matchup;
},
createVote: async (parent, { _id, techNum }) => {
  const vote = await Matchup.findOneAndUpdate(
    { _id },
    { $inc: { [`tech${techNum}_votes`]: 1 } },
    { new: true }
  );
  return vote;
}, */

module.exports = resolvers;
