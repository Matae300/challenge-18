const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  deleteThought,
  updateThought,
  createThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

router.route('/:thoughtId/reactions')
  .post(createReaction);

router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

router.route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought) 
  .delete(deleteThought); 

router.route('/')
  .get(getThoughts) 
  .post(createThought); 

module.exports = router;
