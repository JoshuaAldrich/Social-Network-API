const router = require("express").Router();

// get all users
router.get("/", (req, res) => {
  res.json("Hello World");
});

//get user by id
router.get("/:id", (req, res) => {
  res.json("Hello Sir");
});

//post user
router.post("/", (req, res) => {});

//put request for user by id
router.put("/:id", (req, res) => {
  res.json("Hello Sir");
});

//delete a user by id
router.delete("/:id", (req, res) => {
  res.json("Hello Sir");
});

module.exports = router;
