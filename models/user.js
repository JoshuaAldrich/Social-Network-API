const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    set: (value) => value.trim(),
  },
  email: {
    type: String,
    unique: true,
    required: true,
    set: (value) => value.trim(),
    validate: {
      validator: (value) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
          return true;
        } else return false;
      },
      message: "Please enter a valid email address",
    },
  },
  thoughts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

module.exports = mongoose.model("User", userSchema);
