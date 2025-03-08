const Note = require("./model");
exports.getLandingPage = (req, res, next) => {
  let notes;
  Note.fetchAll((data) => {
    notes = data;
    res.render("main.pug", { title: "Notty", notes });
  });
};
exports.getNoteDetails = (req, res, next) => {
  res.render("note.pug");
};
exports.getNoteEdit = (req, res, next) => {
  const edit = req.query?.edit == "true";
  Note.find(req.query.id, function (data) {
    res.render("note-edit.pug", {
      title: `${edit ? "edit" : "create"} note`,
      edit,
      note: data,
    });
  });
};
exports.getDelete = (req, res, next) => {
  let { id } = req.params;
  id = +id.slice(1);
  Note.Delete(id, (_) => {
    res.redirect("/");
  });
};
exports.postForm = (req, res, next) => {
  const edit = req.body.noteId;
  const note = {
    title: req.body.title,
    body: req.body.noteBody,
    id: req.body.noteId,
  };
  if (edit) Note.update(note);
  else Note.create(note);

  res.redirect("/");
};
