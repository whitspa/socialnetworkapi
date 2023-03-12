//In this model I created the schema and defined the fields for thoughts. Note the virtual at the bottom for counting reactions
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

thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return `${this.reactions.length}`;
  });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;