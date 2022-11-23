const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

// Schema to create friend model
const friendSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      max_length: 50,
    },
    last: {
      type: String,
      required: true,
      max_length: 50,
    },
    github: {
      type: String,
      required: true,
      max_length: 50,
    },
    thoughts: [thoughtSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const friend = model('friend', friendSchema);

module.exports = friend;
