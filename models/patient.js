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

PatientSchema.methods.comparePassword = (password, callback) => {
  bcrypt.compare(password, this.password, (error, isMatch) {
    if (error) {
      return callback(error)
    } else {
      callback(null, isMatch)
    }
  })
}
// refactor code to work using bcrpyt in mongoose
PatientSchema.pre("save", true, (next) => {
  const user = this

  console.log("this is patient schema.pre: ", this)
  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, (saltError, salt) => {
      if (saltError) {
        return next(saltError)
      } else {
        bcrypt.hash(user.paasword, salt, (hashError, hash) => {
          if(hashError) {
            return next(hashError)
          }

          user.password = hash
          next()
        })
      }
    })
  } else {
    return next()
  }
})




const Patient = mongoose.model("Patient", PatientSchema)

module.exports = Patient;