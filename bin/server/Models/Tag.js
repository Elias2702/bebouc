"use strict";

const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
  tag: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: {
    createdAt: "created_at"
  }
});
module.exports = mongoose.model("tag", tagSchema);
//# sourceMappingURL=Tag.js.map