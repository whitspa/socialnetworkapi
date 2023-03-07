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

router.route('/reactions/:thoughtId')
.post(addReaction);

router.route('/:thoughtId')  //    /api/thoughts/..32432id...
.get(getSingleThought)
.delete(deleteThought)
.put(updateThought)

router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;