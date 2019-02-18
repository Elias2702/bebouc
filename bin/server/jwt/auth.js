"use strict";

const jwt = require("jwt-simple");

const LocalStorage = require("node-localstorage").LocalStorage;

const localStorage = new LocalStorage("./scratch");

exports.validate = function (req, res, next) {
  if (localStorage.getItem("token")) {
    let token = localStorage.getItem("token");

    try {
      let decoded = jwt.decode(token, process.env.JWT_TOKEN);
      req._id = decoded.id;
      next();
    } catch {
      return res.status(401).send({
        message: "Invalid token."
      });
    }
  } else {
    return res.status(401).send({
      message: "Token must be provided."
    });
  }
};
//# sourceMappingURL=auth.js.map