//this file is where I set up the database CRUD route logic for thoughts and reactions to thoughts
const { Thought, User } = require('../models');

module.exports = {
  getThoughts(req, res) {
    Thought.find({})
      .select('-__v')
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.params.userId },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>

        res.json('Created the thought 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((data) => res.json({ message: 'Thought deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thoughtdata) =>
        !thoughtdata
          ? res.status(404).json({ message: 'no thought with this id!' })
          : res.json(thoughtdata)
      )
      .catch((err) => res.status(500).json(err));
  },
  addReaction(req, res) {
    console.log('You are adding a reaction');
    console.log(req.body);
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thoughtdata) =>
        res.json(thoughtdata)
      )
      .catch((err) => {
        console.log("Err", err, "-------")
        res.status(500).json(err)
      });
  },



  deleteReaction(req, res) {
    console.log('You are deleting a reaction');
    console.log(req.body);
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId }, 
      { $pull: { reactions: {reactionId: req.params.reactionId } }},                        
      { runValidators: true, new: true }
    )
      .then((thoughtdata) =>
        res.json(thoughtdata)
      )
      .catch((err) => res.status(500).json(err));
  },
};
