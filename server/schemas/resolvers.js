const { User, Post } = require('../models');

const resolvers = {
  Query: {
    allposts: async () => {
      return Post.find({});
    },
    userposts: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return User.find(params);
    },
  },
  Mutation: {

    createPost: async (parent, args) => {
      const newPost = await Post.create(args);
      return newPost;
    },

    editPost: async (parent, args) => {
      const updatedPost = await Post.findByIdAndUpdate(args);
      return updatedPost;
    }, 

    deletePost: async (parent, args) => {
      const postToDelete = await Post.findByIdAndDelete(args);
      return postToDelete;
    }, 

    createUser: async (parent, args) => {
      const newUser = await User.create(args);
      return newUser;
    }, 

    
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
