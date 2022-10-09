const router = require("express").Router();
const { response } = require("express");
const User = require("../models/user");

// get all users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

//get user by id
router.get("/:id", (req, res) => {
  res.json("Hello Sir");
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
router.put("/:id", (req, res) => {
  res.json("Hello Sir");
});

//delete a user by id
router.delete("/:id", (req, res) => {
  res.json("Hello Sir");
});

// to add a new friend to a user's friend list
router.post("/:userId/friends", (req, res) => {
  res.json("Hello Sir");
});

//to remove a friend from a user's friend list
router.delete("/:userId/friends/:friendId", (req, res) => {
  res.json("Hello Sir");
});

module.exports = router;
