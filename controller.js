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
  console.log(req.query);
  const edit = req.query?.edit == "true";
  Note.findNote(req.query.id, function (data) {
    res.render("note-edit.pug", {
      title: `${edit ? "edit" : "create"} note`,
      edit,
      note: data,
    });
  });
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
