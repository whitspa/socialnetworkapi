//In this model I created the schema and defined the fields for users. NOte the virtual at the bottom for counting friends
const { Schema, model } = require('mongoose');
;

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
      match:[/.+@.+\.com$/,"Please enter valid email"]
      //    email validation: true, utilize mongoose matching validation
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
      }
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
  .virtual('friendsCount')
  // Getter
  .get(function () {
    return `${this.friends.length}`;
  });


const User = model('user', userSchema);

module.exports = User;
