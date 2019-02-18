"use strict";

const Loan = require("../Models/Loan.js");

const list = (req, res) => {
  Loan.find().sort({
    borrowerID: 1
  }).then(loan => res.json(loan));
};

const create = (req, res) => {
  new Loan({
    bookID: req.body.bookID,
    borrowerID: req.body.borrowerID,
    active: req.body.active
  }).save().then(tag => res.json(tag)).catch(err => res.status(400).send(err));
};

const edit = (req, res) => {
  Loan.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  }).then(loan => res.json(loan)).catch(err => res.status(400).send(err));
};

const destroy = (req, res) => {
  Loan.findById(req.params.id).then(loan => loan.remove().then(() => res.json({
    success: true
  }))).catch(err => res.status(404).json(err));
};

exports.list = list;
exports.create = create;
exports.edit = edit;
exports.destroy = destroy;
//# sourceMappingURL=Loan.js.map