const router = require("express").Router();
const Post = require("../models/Post");

router.post("/", async (req, res) => {
  const post = new Post(req.body);
  try {
    const saved = await post.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updated = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json("Post deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
