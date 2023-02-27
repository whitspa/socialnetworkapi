const { User, Thought } = require('../models');

module.exports = {
  getUsers(req, res) {
    User.find()
      .populate({ path: 'users', select: '-__v' })
      .then((users) => res.json(user))
      .catch((err) => {
        console.error({ message: err });
        return res.status(500).json(err);
      });
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate({ path: 'user', select: '-__v' })
      .then((user) =>
        !post
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(post)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((post) => res.json(post))
      .catch((err) => res.status(500).json(err));
  },

  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      //.then((Thought) =>
      // !Thought
      //   ? res.status(404).json({ message: 'No user with that ID' })
      //   : Thought.deleteMany({ _id: { $in: Thought.User } })
      //)
      .then((data) => res.json({ message: 'Thought and User deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a course
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((userdata) =>
        !userdata
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(userdata)
      )
      .catch((err) => res.status(500).json(err));
  },

  addFriend(req, res) {
    console.log('You are adding a friend');
    console.log(req.body);
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.body } },
      { runValidators: true, new: true }
    )
      .then((userdata) =>
        res.json(userdata)
      )
      .catch((err) => res.status(500).json(err));
  },

  deleteFriend(req, res) {
    console.log('You are deleting a friend');
    console.log(req.body);
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendsId } },
      { runValidators: true, new: true }
    )
      .then((userdata) =>
        res.json(userdata)
      )
      .catch((err) => res.status(500).json(err));
  },

};

