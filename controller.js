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
  const edit = req.query?.edit == "true";
  console.log("===============>", edit);
  Note.findNote(req.query.id, function (data) {
    console.log(data);
    res.render("note-edit.pug", {
      title: `${edit ? "edit" : "create"} note`,
      edit,
      note: data,
    });
  });
};
exports.postForm = (req, res, next) => {
  const edit = req.body.noteId;
  console.log(edit);
  const note = {
    title: req.body.title,
    body: req.body.noteBody,
    id: req.body.noteId,
  };
  if (edit) Note.updateNote(note);
  else Note.createNote(note);

  res.redirect("/");
};
