"use strict";

const Tag = require("../Models/Tag.js");

const list = (req, res) => {
  Tag.find().sort({
    title: 1
  }).then(tags => res.json(tags));
};

const create = (req, res) => {
  const newTag = new Tag({
    tag: req.body.tag
  });
  newTag.save().then(tag => res.json(tag)).catch(err => res.status(400).send(err));
};

const edit = (req, res) => {
  Tag.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  }).then(tag => res.json(tag)).catch(err => res.status(400).send(err));
};

const destroy = (req, res) => {
  Tag.findById(req.params.id).then(tag => tag.remove().then(() => res.json({
    success: true
  }))).catch(err => res.status(404).json(err));
};

exports.list = list;
exports.create = create;
exports.edit = edit;
exports.destroy = destroy;
//# sourceMappingURL=Tag.js.map