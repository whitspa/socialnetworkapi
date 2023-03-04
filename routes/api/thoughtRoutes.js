const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thoughtController');


router.route('/').get(getThoughts)

router.route('/:userId').post(createThought);

router.route('/:thoughtId').get(getSingleThought)
.delete(deleteThought)
.put(updateThought).post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
.post(addReaction)
.delete(deleteReaction);

module.exports = router;