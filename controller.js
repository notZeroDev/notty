const Note = require("./model");
exports.getLandingPage = (req, res, next) => {
  let notes;
  Note.fetchAll((data) => {
    notes = data;
    notes.forEach((note) => {
      note.date = new Date(note["created_at"]).toLocaleString("default", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    });
    console.log(notes);
    res.render("main.pug", { title: "Notty", notes });
  });
};
exports.getNoteDetails = (req, res, next) => {
  Note.find(req.query.id, (note) => {
    res.render("note.pug", { note });
  });
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
