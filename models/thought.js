const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');
const timestamp = require("../utils/timestamp");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: time => timestamp(time)
      //need to add getter method to format the timestamp on query
    },
    userName: {
      type: String,
      required: true,
    },
    reactions: [
     reactionSchema
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema
  .virtual('reactuonCount')
  // Getter
  .get(function () {
    return `${this.reactions.length}`;
  });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;