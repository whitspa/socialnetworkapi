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
  virtuals: true,
},
id: false,

toJSON: {
      getters: true,
    },
  }
);

userSchema
  .virtual('friendsCount')
  // Getter
  .get(function () {
    return `${this.friends.length}`;
  });
  // Setter to set the first and last name
  // .set(function (v) {
  //   const first = v.split(' ')[0];
  //   const last = v.split(' ')[1];
  //   this.set({ first, last });
  // });

const user = model('user', userSchema);

module.exports = user;
