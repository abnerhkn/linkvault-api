const Link = require("../models/linkModel");

exports.getAllLinks = async (req, res) => {
  const links = await Link.find();
  res.json(links);
};

exports.createLink = async (req, res) => {
  const { title, url, category, tags } = req.body;
  const link = new Link({ title, url, category, tags });
  await link.save();
  res.status(201).json(link);
};

exports.deleteLink = async (req, res) => {
  await Link.findByIdAndDelete(req.params.id);
  res.status(204).send();
};
