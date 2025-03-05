const express = require("express");
const app = express();
const path = require("path");
app.engine("pug", require("pug").__express);
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));
app.use("/note", (req, res, next) => {
  res.render("note.pug", { title: "note" });
});
app.use((req, res, next) => {
  console.log("we are starting");
  res.render("main.pug", { title: "Notty" });
});
app.listen(3000);
