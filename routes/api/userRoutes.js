const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  createFriend,
  deleteFriends
} = require('../../controllers/userController');

router.route('/:userId/friends')
  .post(createFriend) 

router.route('/:userId/friends/:friendId')
  .delete(deleteFriends);
  
router.route('/:userId')
  .get(getSingleUser) 
  .put(updateUser) 
  .delete(deleteUser); 

router.route('/')
  .get(getUsers) 
  .post(createUser); 

module.exports = router;