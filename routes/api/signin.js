const { doc } = require("prettier");
const { EvalSourceMapDevToolPlugin } = require("webpack");
const User = require("../../models/user");
const userData = require("../../models/userData");

module.exports = (app) => {
  app.post("/api/account/signup", (req, res, next) => {
    const { body } = req;
    const { name, cellPhone, email, password } = body;
    let { email } = body;

    if (!name) {
      return res.end({
        success: false,
        message: "Error: Name cannot be blank",
      });
    }
    if (!cellPhone) {
      return res.end({
        success: false,
        message: "Error: Cellphone number cannot be blank",
      });
    }
    if (!email) {
      return res.end({
        success: false,
        message: "Error: Email cannot be blank",
      });
    }
    if (!password) {
      return res.end({
        success: false,
        message: "Error: Password cannot be blank",
      });
    }

    console.log("working");

    email = email.toLowerCase();

    User.find(
      {
        email: email,
      },
      (err, previousUser) => {
        if (err) {
          return res.end("Error!");
        } else if (previousUser.length > 0) {
          return res.end("Error: Account already exists!");
        }

        const newUser = new User();

        newUser.email = email;
        newUser.name = name;
        newUser.cellPhone = cellPhone;
        newUser.password = newUser.generateHash(password);
        newUser.save((err, user) => {
          if (err) {
            return res.end({
              success: false,
              message: "Error!",
            });
          }
          return res.end({
            success: true,
            message: "Sign up successful!",
          });
        });
      });
  });

  app.post("/api/account/signup", (req, res, next) => {
    const { body } = req;
    const { password } = body;
    let { email } = body;

    if (!email) {
      return res.end({
        success: false,
        message: "Error: Email cannot be blank",
      });
    }
    if (!password) {
      return res.end({
        success: false,
        message: "Error: Password cannot be blank",
      });
    }

    email = email.toLowerCase();

    User.find({
      email: email
    }, (err, users) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error!'
        });
      }
      if (users.length != 1) {
        return res.send({
          success: false,
          message: 'Error: Invalid'
        });
      }

      const user = users[0];
      if (!user.validPassword(password)) {
        return res.send({
          success: false,
          message: 'Error: Invalid!'
        });
      }
      const userData = new userData();
      userData.userId = user._id;
      userData.save((err, doc))

      if (err) {
        return res.send({
          success: false,
          message: 'Error!'
        });
      }
        return res.send({
          success: true,
          message: 'Valid!',
          token: doc._id
        });
    });
  });
};
