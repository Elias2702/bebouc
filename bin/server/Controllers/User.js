"use strict";

const User = require("../Models/User.js");

const bcrypt = require("bcryptjs");

const saltRounds = 10;

const LocalStorage = require("node-localstorage").LocalStorage;

const localStorage = new LocalStorage("./scratch");

const list = (req, res) => {
  User.find().sort({
    name: 1
  }).then(users => res.json(users)).catch(err => {
    console.log(err);
  });
};

const create = (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).json({
      text: "Invalid Request"
    });
  } else {
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      if (err) {
        return err;
      }

      let user = {
        name: req.body.name,
        surname: req.body.surname,
        admin: req.body.admin,
        email: req.body.email,
        password: hash
      },
          findUser = new Promise((resolve, reject) => {
        User.findOne({
          email: user.email
        }, (er, result) => {
          if (er) {
            reject(500);
          } else if (result) {
            res.status(204).json({
              text: "User already exists"
            });
          } else {
            resolve(true);
          }
        });
      });
      findUser.then(() => {
        let _u = new User(user);

        _u.save((er, usr) => {
          if (er) {
            res.status(500).json({
              text: "Internal error"
            });
          } else {
            res.status(200).json({
              text: "Succes",
              token: usr.getToken()
            });
            localStorage.setItem("token", res.data.token);
            console.log(localStorage.getItem("token"));
          }
        });
      }, error => {
        switch (error) {
          case 500:
            res.status(500).json({
              text: "Internal error"
            });
            break;

          case 204:
            res.status(204).json({
              text: "Email already exists"
            });
            break;

          default:
            res.status(500).json({
              text: "Internal error"
            });
        }
      });
    });
  }
};

const login = (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).json({
      text: "Invalid request"
    });
  } else {
    User.findOne({
      email: req.body.email
    }, (err, user) => {
      if (err) {
        res.status(500).json({
          text: "Internal error"
        });
      } else if (!user) {
        res.status(401).json({
          text: "User does not exist"
        });
      } else {
        user.authenticate(req.body.password, isChecked => {
          if (isChecked) {
            let token = user.getToken();
            localStorage.setItem("token", token);
            req.body.password = "";
            res.status(200).json({
              auth: true,
              text: "Authentification",
              token: token
            });
          } else {
            res.status(401).json({
              text: "Password incorrects"
            });
          }
        });
      }
    });
  }

  return;
};

const edit = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  }).then(user => res.json(user)).catch(err => res.status(400).send(err));
};

const destroy = (req, res) => {
  User.findById(req.params.id).then(user => user.remove().then(() => res.json({
    success: true
  }))).catch(err => res.status(404).json(err));
};

exports.list = list;
exports.login = login;
exports.create = create;
exports.edit = edit;
exports.destroy = destroy;
//# sourceMappingURL=User.js.map