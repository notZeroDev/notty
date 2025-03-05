const express = require("express");
const app = express();
const path = require("path");
app.engine("pug", require("pug").__express);
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  console.log("we are starting");
  res.render("layouts/main.pug");
});
app.listen(3000);
