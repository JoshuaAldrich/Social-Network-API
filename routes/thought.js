const router = require("express").Router();
const thought = require("../models/thought");
const Thought = require("../models/thought");
const User = require("../models/user");

// get a users thoughts
router.get("/", async (req, res) => {
  const thoughts = await Thought.find();
  res.json(thoughts);
});

// get a single thought by id
router.get("/:id", async (req, res) => {
  const thought = await Thought.findById(req.params.id);
  res.json(thought);
});

//post a users thoughts
router.post("/", async (req, res) => {
  let newThought = new Thought({
    thoughtText: req.body.thoughtText,
    username: req.body.username,
  });
  await newThought.save();
  let user = await User.findById(req.body.userId);
  user.thoughts.push(newThought._id);
  await user.save();
  res.json(newThought);
});

//put thought by id
router.put("/:id", async (req, res) => {
  const thought = await Thought.findById(req.params.id);
  thought.thoughtText = req.body.thoughtText;
  await thought.save();
  res.json(thought);
});

// delete thought by id
router.delete("/:id", async (req, res) => {
  const thought = await Thought.deleteOne({
    _id: req.params.id,
  });
  res.json(thought);
});

//create a reaction post
router.post("/:thoughtId/reactions", async (req, res) => {
  const thought = await Thought.findById(req.params.thoughtId);
  thought.reactions.push({
    body: req.body.body,
    username: req.body.username,
  });
  await thought.save();
  res.json(thought);
});

//delete reaction based on id
router.delete("/:thoughtId/reactions/:reactionId", async (req, res) => {
  const thought = await Thought.findById(req.params.thoughtId);
  thought.reactions = thought.reactions.filter(
    (reaction) => reaction._id != req.params.reactionId
  );
  await thought.save();
  res.json(thought);
});

module.exports = router;
