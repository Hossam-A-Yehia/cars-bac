const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

// update
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can Update only your account");
  }
});

module.exports = router;
