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


module.exports = router;