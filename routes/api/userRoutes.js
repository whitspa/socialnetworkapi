//this file is where I set up the http/URL CRUD route logic for users and friends
const router = require('express').Router();
const {
  getSingleUser,
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController');


router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser)
.delete(deleteUser)
.put(updateUser)

router.route('/:userId/friends/:friendsId')
.post(addFriend)
.delete(deleteFriend);


module.exports = router;