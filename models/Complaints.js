const mongoose = require("mongoose");

ComplaintSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    title: { type: String, require: true },
    email: { type: String },
    img: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("complaint", ComplaintSchema);
