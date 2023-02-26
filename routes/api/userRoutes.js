const router = require('express').Router();
const {
  getSingleUser,
  getUsers,
  createUser,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser).delete(deleteUser);

router.route('/:userId').get(getSingleUser).put(updateUser).post(addFriend);

router.route()('/:userId/friends/:friendsId').delete(deleteFriends);
//Friends virtual calls for objectid not friendsID? How to delete one Friend instance vs all friends
//Post route to create a friend?
//Addtl code for friennd count

module.exports = router;