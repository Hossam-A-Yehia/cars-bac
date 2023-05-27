const mongoose = require("mongoose");

CommentSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    title: { type: String, require: true },
    img: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("comment", CommentSchema);
