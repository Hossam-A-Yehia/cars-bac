const router = require("express").Router()
const Booking = require("../models/Bookings")

// Add Booking
router.post("/", async (req, res) => {
  try {
    const newBooking = await new Booking(req.body)
    const booking = await newBooking.save()
    res.status(200).json(booking)
  } catch (err) {
    res.status(500).json(err)
  }
})


// Delete Booking
router.delete("/", async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.body.id)
    res.status(200).json("Account deleted")
  } catch (err) {
    res.status(500).json(err)
  }
})

//Get All Bookings

router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find({})
    res.status(200).json(bookings)
  } catch (err) {
    res.status(500).json(err)
  }
})
// get Booking By Id
router.get("/:id", async (req, res) => {
  try {
    const bookings = await Booking.findOne({ _id: req.params.id })
    res.status(200).json(bookings)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Update Booking 
router.put("/:id", async (req, res) => {
  try {
    const updatebooking = await Booking.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, { new: true })
    res.status(200).json(updatebooking)
  } catch (err) {
    res.status(500).json(err)
  }
})




module.exports = router