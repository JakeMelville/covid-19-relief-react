const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const PatientSchema = new Schema({
    name: { 
        type: String, 
        required: true, 
      },
    cellPhone: { 
        type: String, 
        required: true, 
      },
    email: { 
        type: String, 
        required: true, 
        unique: true,
      },
    password: { 
      type: String, 
      required: true, 
    },
});

PatientSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}
// refactor code to work using bcrpyt in mongoose
PatientSchema.pre("save", function(next) {
  console.log("this is patient schema.pre: ", this)
  if (!this.password) {
    console.log("no password!")
    next()
  } else {
    console.log("pre saved");
    this.password = this.hashPassword(this.password)
    next()
  }
})

const Patient = mongoose.model("Patient", PatientSchema)

module.exports = Patient;