const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
///Routes
const Booking = require("./routes/bookings");
const Complaint = require("./routes/complaints");
const Comment = require("./routes/comments");
const Auth = require("./routes/auth");
const User = require("./routes/user");
const Product = require("./routes/product");

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
dotenv.config();
app.use(express.json());
// Mongoose
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Mongoose DB connect"))
  .catch((err) => console.log(err));
// Routes
app.use("/api/booking", Booking);
app.use("/api/complaint", Complaint);
app.use("/api/comment", Comment);
app.use("/api/auth", Auth);
app.use("/api/users", User);
app.use("/api/products", Product);

app.get("*", (req, res) => {
  res.send("Hello");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server Working"));
