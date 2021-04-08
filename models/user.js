const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { 
        type: String, 
        required: true, 
        default: ''
      },
    cellPhone: { 
        type: String, 
        required: true, 
        default: ''
      },
    email: { 
        type: String, 
        required: true, 
        default: ''
      },
    password: { 
      type: String, 
      required: true, 
      default: ''
    },
});

userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password,bcrypt.genSaltSync(8), null);
}

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}
const User = mongoose.model("User", userSchema)

module.exports = User;