const mongoose = require("mongoose");
const reactionSchema = require("./reaction");

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
    get: (value) => {
      const date = new Date(value);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
  },

  username: {
    type: String,
    required: true,
  },

  reactions: [reactionSchema],
});
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

module.exports = mongoose.model("Thought", thoughtSchema);
