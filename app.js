const express = require("express");
const app = express();

const index = require("./routes/index");

app.get("/", index.front);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
