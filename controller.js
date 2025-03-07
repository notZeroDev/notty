exports.getLandingPage = (req, res, next) => {
  console.log("we are starting");
  res.render("main.pug", { title: "Notty" });
};
exports.getNoteDetails = (req, res, next) => {
  res.render("note.pug");
};
exports.getNoteEdit = (req, res, next) => {
  res.render("note-edit.pug");
};
exports.postForm = (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
};
