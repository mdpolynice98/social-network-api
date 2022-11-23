const router = require('express').Router();
const {
  getFriends,
  getSingleFriend,
  createFriend,
  deleteFriend,
  addThought,
  removeThought,
} = require('../../controllers/friendController');

// /api/Friends
router.route('/').get(getFriends).post(createFriend);

// /api/Friends/:FriendId
router.route('/:friendId').get(getSingleFriend).delete(deleteFriend);

// /api/Friends/:FriendId/Thoughts
router.route('/:friendId/thoughts').post(addThought);

// /api/Friends/:FriendId/Thoughts/:ThoughtId
router.route('/:friendId/thoughts/:thoughtId').delete(removeThought);

module.exports = router;
