const router = require("express").Router();

// get a users thoughts
router.get("/", (req, res) => {
  res.json("thoughts");
});

// get a single thought by id
router.get("/:id", (req, res) => {
  res.json("thoughts:id");
});

//post a users thoughts
router.post("/", (req, res) => {
  res.json("post thoughts");
});

//put thought by id
router.put("/:id", (req, res) => {
  res.json("thoughts:id");
});

// delete thought by id
router.delete("/:id", (req, res) => {
  res.json("thoughts:id");
});

//create a reaction post
router.post("/:thoughtId/reactions", (req, res) => {
  res.json("post thoughts");
});

//delete reaction based on id
router.delete("/:thoughtId/reactions/:reactionId", (req, res) => {
  res.json("post thoughts");
});

module.exports = router;
