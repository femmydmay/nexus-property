const mongoose = require("mongoose");

const SaleSchema = new mongoose.Schema({
  amount: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  seller: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Sale", SaleSchema);
