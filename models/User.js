const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, default: false },
    profilePic: {
      type: String,
      default:
        "https://firebasestorage.googleapis.com/v0/b/shop-209b2.appspot.com/o/images.png?alt=media&token=75ac5164-5162-494f-89f6-0d5dea814eb8",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
