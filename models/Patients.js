const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
      },
    password: { 
      type: String, 
      required: true, 
    },
});


const Patient = mongoose.model("Patient", PatientSchema)

module.exports = Patient;