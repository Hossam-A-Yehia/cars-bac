const mongoose = require("mongoose")


BookingSchema = mongoose.Schema({
  name: { type: String, require: true },
  phone: { type: String, require: true },
  address: { type: String, require: true },
  carType: { type: String, require: true },
  model: { type: String, require: true },
  version: { type: String, require: true },
  received: { type: String, require: true },
  dueDate: { type: String, require: true },
  damage: { type: String, require: true },
  price: { type: String, require: true },
}, { timestamps: true })

module.exports = mongoose.model("booking", BookingSchema)