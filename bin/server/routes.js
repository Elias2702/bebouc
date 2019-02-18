"use strict";

const userController = require("./Controllers/User.js");

const bookController = require("./Controllers/Book.js");

const loanController = require("./Controllers/Loan.js");

const reviewController = require("./Controllers/Review.js");

const tagController = require("./Controllers/Tag.js");

const mongoose = require("mongoose");

const User = mongoose.model("user");

const checkToken = require("../server/jwt/auth");

module.exports = function (app) {
  app.post("/login", userController.login);
  app.post("/create", userController.create);
  app.get("/users", userController.list);
  app.delete("/users/:id", userController.destroy);
  app.put("/users/:id", userController.edit);
  app.get("/books", bookController.list);
  app.post("/books", bookController.create);
  app.put("/books/:id", bookController.edit);
  app.delete("/books/:id", bookController.destroy);
  app.get("/reviews", reviewController.list);
  app.post("/reviews", reviewController.create);
  app.put("/reviews/:id", reviewController.edit);
  app.delete("/reviews/:id", reviewController.destroy);
  app.get("/loans", loanController.list);
  app.post("/loans", loanController.create);
  app.put("/loans/:id", loanController.edit);
  app.delete("/loans/:id", loanController.destroy);
  app.get("/tags", tagController.list);
  app.post("/tags", tagController.create);
  app.put("/tags/:id", tagController.edit);
  app.delete("/tags/:id", tagController.destroy);
  app.get("/auth", checkToken.validate, (req, res, next) => {
    User.findOne({
      _id: req._id
    }).then(user => {
      res.json({
        email: user.email,
        admin: user.admin,
        userID: user._id
      });
    }).catch(err => next(err));
  });
};
//# sourceMappingURL=routes.js.map