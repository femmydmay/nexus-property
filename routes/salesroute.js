const express = require("express");
const router = express.Router();
const Sale = require("../models/Sale");

// Get all sale properties
router.get("/", async (req, res) => {
  try {
    const sales = await Sale.find();
    res.json(sales);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Get a specific sale property by ID
router.get("/:id", async (req, res) => {
  try {
    const sale = await Sale.findById(req.params.id);
    if (!sale) return res.status(404).json({ msg: "Sale property not found" });
    res.json(sale);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Add a new sale property
router.post("/", async (req, res) => {
  const { amount, description, location, seller, state } = req.body;
  if (!amount || !description || !location || !seller || !state) {
    return res.status(400).json({ msg: "All fields are required" });
  }
  try {
    const newSale = new Sale({ amount, description, location, seller, state });
    const sale = await newSale.save();
    res.status(201).json(sale);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Update a sale property by ID
router.put("/:id", async (req, res) => {
  try {
    const sale = await Sale.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!sale) return res.status(404).json({ msg: "Sale property not found" });
    res.json(sale);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Delete a sale property
router.delete("/:id", async (req, res) => {
  try {
    const sale = await Sale.findById(req.params.id);
    if (!sale) return res.status(404).json({ msg: "Sale property not found" });
    await sale.deleteOne();
    res.json({ msg: "Sale property deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
