
const router = require("express").Router()
const Complaint = require("../models/Complaints")

// Add Complaint
router.post("/", async (req, res) => {
  try {
    const newComplaint = await new Complaint(req.body)
    const complaint = await newComplaint.save()
    res.status(200).json(complaint)
  } catch (err) {
    res.status(500).json(err)
  }
})


// Delete Complaint
router.delete("/", async (req, res) => {
  try {
    await Complaint.findByIdAndDelete(req.body.id)
    res.status(200).json("Account deleted")
  } catch (err) {
    res.status(500).json(err)
  }
})


// Get All Compl 
router.get("/", async (req, res) => {
  try {
    const complaint = await Complaint.find({})
    res.status(200).json(complaint)
  } catch (err) {
    res.status(500).json(err)
  }
})
module.exports = router