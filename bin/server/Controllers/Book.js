"use strict";

const Book = require("../Models/Book.js");

const list = (req, res) => {
  Book.find().sort({
    title: 1
  }).then(books => res.json(books));
};

const create = (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    isbn: req.body.isbn,
    language: req.body.language,
    summary: req.body.summary,
    owner: req.body.owner,
    isBook: req.body.isBook,
    isEbook: req.body.isEbook
  });
  newBook.save().then(book => res.json(book)).catch(err => res.status(400).send(err));
};

const edit = (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    overwrite: false,
    upsert: true
  }).then(book => res.json(book)).catch(err => res.status(400).send(err));
};

const destroy = (req, res) => {
  Book.findById(req.params.id).then(book => book.remove().then(() => res.json({
    success: true
  }))).catch(err => res.status(404).json(err));
};

exports.list = list;
exports.create = create;
exports.edit = edit;
exports.destroy = destroy;
//# sourceMappingURL=Book.js.map