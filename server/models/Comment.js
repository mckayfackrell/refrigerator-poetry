const { Schema, model } = require("mongoose");

function dateFormat(date) {
  const formattedDate = new Date(date);
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(formattedDate);
}

const commentSchema = new Schema(
  {
    username: {
      type: String,
    },
    comment: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: dateFormat,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    // id: false,
  }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
