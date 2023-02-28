const { Schema, model } = require("mongoose");
const commentSchema = require("./Comment.js");

function dateFormat(date) {
  const formattedDate = new Date(date);
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(formattedDate);
}

const postSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: dateFormat,
    },
    comments: [commentSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    // id: false,
  }
);

const Post = model("Post", postSchema);

module.exports = Post;
