const express = require("express");
const app = express();
app.use((req, res, next) => {
  console.log("we are starting");
});
app.listen(3000);
