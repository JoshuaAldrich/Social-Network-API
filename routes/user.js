const router = require("express").Router();
const { response } = require("express");
const User = require("../models/user");

// get all users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

//get user by id
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

//post user
router.post("/", async (req, res) => {
  let newUser = new User({
    username: req.body.username,
    email: req.body.email,
  });
  await newUser.save();
  res.json(newUser);
});

//put request for user by id
router.put("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  user.email = req.body.email;
  user.username = req.body.username;
  await user.save();
  res.json(user);
});

//delete a user by id
router.delete("/:id", async (req, res) => {
  const users = await User.deleteOne({
    _id: req.params.id,
  });
  res.json(users);
});

// to add a new friend to a user's friend list
router.post("/:userId/friends/:friendId", async (req, res) => {
  const user = await User.findById(req.params.userId);
  user.friends.push(req.params.friendId);
  await user.save();
  res.json(user);
});

//to remove a friend from a user's friend list
router.delete("/:userId/friends/:friendId", async (req, res) => {
  const user = await User.findById(req.params.userId);
  user.friends = user.friends.filter((friendId) => {
    if (friendId != req.params.friendId) {
      return true;
    } else {
      return false;
    }
  });
  await user.save();
  res.json(user);
});

module.exports = router;
