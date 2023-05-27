
const router = require("express").Router()
const Comment = require("../models/Comments")

// Add Comment
router.post("/", async (req, res) => {
  try {
    const newComment = await new Comment(req.body)
    const comment = await newComment.save()
    res.status(200).json(comment)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Get All Comments
router.get("/", async (req, res) => {
  try {
    const comment = await Comment.find({})
    res.status(200).json(comment)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router