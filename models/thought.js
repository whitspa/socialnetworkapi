const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      //need to add char range limit betw 1 and 280 characters
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      //need to add getter method to format the timestamp on query
    },
    userName: {
      type: String,
      required: true,
    },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const thought = model('thought', thoughtSchema);

module.exports = thought;