const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
//   "mongodb://localhost/reactreadinglist"
);

const userData = [
  {
    email: "tdz@yahoo.com",
    password: "password456",
  },
  {
    email: "trevor@gmail.com",
    password: "password123",
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userData))
  .then(data => {
    console.log();
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });