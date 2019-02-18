"use strict";

const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  authorID: {
    type: String,
    required: true
  },
  authorName: {
    type: String,
    required: true
  },
  authorSurname: {
    type: String,
    required: true
  },
  bookID: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  comment: {
    type: String
  }
}, {
  timestamps: {
    createdAt: "created_at"
  }
});
module.exports = mongoose.model("review", reviewSchema);
//# sourceMappingURL=Review.js.map