const express = require("express");
const router = express.Router();
const Rent = require("../models/Rent");

// Get all rent properties
router.get("/", async (req, res) => {
  try {
    const rents = await Rent.find();
    res.json(rents);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Get a specific rent property by ID
router.get("/:id", async (req, res) => {
  try {
    const rent = await Rent.findById(req.params.id);
    if (!rent) return res.status(404).json({ msg: "Rent property not found" });
    res.json(rent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Add a new rent property
router.post("/", async (req, res) => {
  const { amount, description, location, seller, state } = req.body;
  if (!amount || !description || !location || !seller || !state) {
    return res.status(400).json({ msg: "All fields are required" });
  }
  try {
    const newRent = new Rent({ amount, description, location, seller, state });
    const rent = await newRent.save();
    res.status(201).json(rent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Update a rent property by ID
router.put("/:id", async (req, res) => {
  try {
    const rent = await Rent.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!rent) return res.status(404).json({ msg: "Rent property not found" });
    res.json(rent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Delete a rent property
router.delete("/:id", async (req, res) => {
  try {
    const rent = await Rent.findById(req.params.id);
    if (!rent) return res.status(404).json({ msg: "Rent property not found" });
    await rent.deleteOne();
    res.json({ msg: "Rent property deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
