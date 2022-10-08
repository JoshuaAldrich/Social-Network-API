const mongoose = require("mongoose");

let thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        if (value.length >= 1 && value.length <= 280) {
          return true;
        } else {
          return false;
        }
      },
      message: "Please keep your message between 1 and 280 characters.",
    },
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  username: {
    type: String,
    required: true,
  },

  reactions: {},
});

module.exports = mongoose.model("Thought", thoughtSchema);
