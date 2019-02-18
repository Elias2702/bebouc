"use strict";

const mongoose = require("mongoose");

let loanSchema = new mongoose.Schema({
  bookID: {
    type: String,
    required: true
  },
  borrowerID: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: {
    createdAt: "created_at"
  }
});
module.exports = mongoose.model("loan", loanSchema);
//# sourceMappingURL=Loan.js.map