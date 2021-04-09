const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const validateUserInput = require("../../client/src/Auth/login");
const User = require("../../models/user");

router.post("/signup", (req, res) => {
  const { errors, isValid } = validateUserInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(400).json({ email: "Email not found!" });
    } else {
      const newUser = new User({
        name: req.body.name,
        cellPhone: req.body.cellPhone,
        email: req.body.email,
        password: req.body.password,
      });

    
    //   bcrypt.genSalt(10, (err, salt) => {
    //     bcrypt.hash(newUser.password, salt, (err, hash) => {
    //       if (err) throw err;
    //       newUser.password = hash;
    //       newUser
    //         .save()
    //         .then((user) => res.json(user))
    //         .catch((err) => console.log(err));
    }

    bcrypt.compare(password, user.password)
    .then(isMatch => {
        if (isMatch) {
            const payload = {
            id: user.id,
            name: user.name
        };

    jwt.sign(
        payload,
        // keys.secretOrKey,
        // {
        //     expiresIn: 31556926 
        // },
        (err, token) => {
            res.json({
                success: true,
                token: "Bearer " + token
            });
        }
    );
    } else {
        return res.status(400).json({ passwordincorrect: "Password incorrect" });
    }
    });
  });
});

module.exports = router;
