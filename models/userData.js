const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userData = new Schema({
    userId: { 
        type: Number,  
        default: -1
      },
});

const userId = mongoose.model("userId", userData)

module.exports = userId;
