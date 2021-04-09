const db = require("../models");

// Defining methods for the patientController
module.exports = {
  findAll: function(req, res) {
    db.Patient
      .find({})
      .sort({ date: -1 })
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Patient
      .findById(req.params.id)
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Patient
      .create(req.body)
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Patient
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Patient
      .findById({ _id: req.params.id })
      .then(dbResults => dbResults .remove())
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(422).json(err));
  }
};

