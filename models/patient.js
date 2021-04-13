const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const SALT_WORK_FACTOR = 10;

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
PatientSchema.pre("save", true, (next) => {
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

// PatientSchema.virtual("password").set((password) => {
//   this._password = password;
// });

// PatientSchema.methods = {
//   comparePassword: (candidatePassword,cb) => {
//     bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
//       if(err) return cb(err);
//       cb(null, isMatch);
//     });
//   }
// }

// PatientSchema.pre("save", (next) => {
//   const patientPass = this;
//   if(patientPass._password === undefined) {
//     return next();
//   } 
//   bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) {
//     if(err) console.log(err);
//     bcrypt.hash(patientPass._password, salt, (err, hash) {
//       if(err) console.log(err);
//       patientPass.hashed_password = hash;
//       next();
//     });
//   });
// });



const Patient = mongoose.model("Patient", PatientSchema)

module.exports = Patient;