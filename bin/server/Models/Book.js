"use strict";

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true,
    max: 13,
    trim: true,
    unique: true
  },
  language: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  tags: [{
    type: Array
  }],
  owner: {
    type: String,
    required: true
  },
  isBook: {
    type: Boolean,
    required: true
  },
  isEbook: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: {
    createdAt: "created_at"
  }
});
module.exports = mongoose.model("book", bookSchema);
//# sourceMappingURL=Book.js.map