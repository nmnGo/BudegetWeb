const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Expense = new Schema({
  expense_title: String,

  expense_amount: Number,

  expense_date: String
});

module.exports = mongoose.model("Expense", Expense);
