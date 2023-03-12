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

router.route('/:thoughtId/reactions/')
.post(addReaction)
router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction)


router.route('/:thoughtId')  
.get(getSingleThought)
.delete(deleteThought)
.put(updateThought)

module.exports = router;