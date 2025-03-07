const Note = require("./model");
exports.getLandingPage = (req, res, next) => {
  let notes;
  Note.fetchAll((data) => {
    notes = data;
    console.log(data);
    res.render("main.pug", { title: "Notty", notes });
  });
};
exports.getNoteDetails = (req, res, next) => {
  res.render("note.pug");
};
exports.getNoteEdit = (req, res, next) => {
  res.render("note-edit.pug");
};
exports.postForm = (req, res, next) => {
  const note = {
    title: req.body.title,
    body: req.body.noteBody,
  };
  console.log(note);
  Note.createNote(note);
  res.redirect("/");
};
