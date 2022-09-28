const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Budget = new Schema({
  budget_amount: Number,
  budget_date: String,
});

module.exports = mongoose.model("Budget", Budget);
