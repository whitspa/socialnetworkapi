const { user } = require('../models');

module.exports = {
  getUsers(req, res) {
    users.find()
      .populate({ path: 'users', select: '-__v' })
      .then((users) => res.json(user))
      .catch((err) => {
        console.error({ message: err });
        return res.status(500).json(err);
      });
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.postId })
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
};