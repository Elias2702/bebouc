"use strict";

const mongoose = require("mongoose");

const jwt = require("jwt-simple");

const bcrypt = require("bcryptjs");

let userSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    trim: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: {
    createdAt: "created_at"
  }
});
userSchema.methods = {
  authenticate: function (password, next) {
    bcrypt.compare(password, this.password).then(res => {
      next(res);
    }).catch(err => {
      console.log(err);
    });
  },
  getToken: function () {
    console.log(this.admin);
    return jwt.encode({
      id: this._id,
      admin: this.admin
    }, process.env.JWT_TOKEN);
  }
};
module.exports = mongoose.model("user", userSchema);
//# sourceMappingURL=User.js.map