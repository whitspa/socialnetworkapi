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
.put(updateUser).post(addFriend);

router.route('/:userId/friends/:friendsId');
delete(deleteFriend);
//Friends virtual calls for objectid not friendsID? How to delete one Friend instance vs all friends
//Post route to create a friend?
//Addtl code for friennd count

module.exports = router;