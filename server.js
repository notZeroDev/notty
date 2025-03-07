const express = require("express");
const app = express();
const path = require("path");
const router = require("./routes");
const bodyParser = require("body-parser");
app.engine("pug", require("pug").__express);
app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));
app.use("/", router);
app.listen(3000);
