const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
} = require('../../controllers/thoughtController');

// /api/users
router.route('/').get(getThoughts).post(createThought).delete(deleteThought);

// /api/users/:userId
router.route('/:userId').get(getSingleThought).put(updateThought).post(addReacton);

router.route('/:userId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;