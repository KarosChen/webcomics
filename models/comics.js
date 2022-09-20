const { dir } = require("console");
const fs = require("fs");
const path = require("path");

function getRandomComcis(num) {
  let comcis = [];
  let basePath = path.join(__dirname, "../data");
  let dirs = fs.readdirSync(basePath);

  dirs.forEach((dir) => {
    let coverPath = path.join(basePath, dir, "metadata", "cover.jpg");
    let cover = fs.readFileSync(coverPath);
    comcis.push({
      name: dir,
    });
  });

  return comcis;
}
exports.getRandomComcis = getRandomComcis;
