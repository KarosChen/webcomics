const comcisModel = require("../models/comics");
exports.front = (req, res) => {
  let comcics = comcisModel.getRandomComcis(1);
  res.send(comcics);
};
