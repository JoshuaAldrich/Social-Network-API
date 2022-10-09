const mongoose = require("mongoose");

let reactionSchema = new mongoose.Schema({
  body: {
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
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    get: (value) => {
      const date = new Date(value);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
  },
});

module.exports = mongoose.model("Reaction", reactionSchema);
