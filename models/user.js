const { Schema, model } = require('mongoose');
const friendCountSchema = require('./friendCount');

const userSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
//    email validationm: true, utilize mongoose matching validation
    },
    thoughts: [
    {
        type: Schema.Types.ObjectId,
        ref: 'thought',
    },
    ],
    friends: [
    {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    ],
    },
 { 
toJSON: {
      getters: true,
    },
  }
);

const user = model('user', userSchema);

module.exports = user;
