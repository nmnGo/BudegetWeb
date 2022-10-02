const express = require("express");
const mongoose = require("mongoose");
const port = 5000;
const Expense = require("./models/Expense");
const Budget = require("./models/Budget");
const flash = require("connect-flash");

// app.use(flash)
const app = express();
const db = process.env.DB;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected.");
  })
  .catch((err) => {
    console.log("Database error");
    console.log(err);
  });

app.get("/", (req, res) => {
  return res.json({
    "message ": "hello friends",
  });
});
// obj={
//   "expense_tile":'ljsbhskj',
//   "expense_amount":612873
// }

app.post("/api/expense", (req, res) => {
  let expense_title = req.body.expense_title;
  let expense_amount = req.body.expense_amount;
  const expense = new Expense({
    expense_title: String,
    expense_amount: Number,
    expense_date: String,
  });
});

app.post("/api/budget", (req, res) => {
  let budget_amount = req.body.expense_amount;
  const budget = new Budget({
    budget_amount: Number,
    budget_date: String,
  });
});

app.listen(port, () => {
  console.log("server is running at port 5000");
});
