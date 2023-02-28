const { Schema, model } = require("mongoose");

function validateEmail(email) {
  const emailRegex = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    "gm"
  );
  return emailRegex.test(email);
}

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: validateEmail,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema);

module.exports = User;
