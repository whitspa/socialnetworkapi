//this file is where I set up the database CRUD route logic for users and friends
const { User, Thought } = require('../models');

module.exports = {
  getUsers(req, res) {
    User.find()
      .populate({ path:'thoughts', select: '-__v' })
      .then((users) => res.json(users))
      .catch((err) => {
        console.error({ message: err });
        return res.status(500).json(err);
      });
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate({ path: 'thoughts', select: '-__v' })
      .then((user) =>
     
          res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  createUser(req, res) {
    User.create(req.body)
      .then((post) => res.json(post))
      .catch((err) => res.status(500).json(err));
  },

  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((data) => res.json({ message: 'Thought and User deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
 
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
      { $addToSet: { friends: req.params.friendsId } },
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

