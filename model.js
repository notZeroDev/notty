const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("notes.db");
//* example code
// db.exec(
//   "CREATE TABLE notes (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, body TEXT NOT NULL);"
// );
// db.exec("DELETE FROM notes WHERE id = 1;");
module.exports = class Note {
  static fetchAll(callback) {
    db.all("SELECT * FROM notes", function (err, data) {
      if (err) {
        console.error(err);
      } else callback(data);
    });
  }
  static create(note) {
    db.exec(
      `INSERT INTO notes(title, body) VALUES('${note.title}', '${note.body}');`
    );
    console.log(`${note.title} is Created!`);
  }
  static find(id, callback) {
    db.get(`SELECT * FROM notes WHERE id = ${id}`, function (err, data) {
      if (err) {
        console.error(err);
        callback(undefined);
      } else {
        callback(data);
      }
    });
  }
  static update(note) {
    console.log("updated", note);
    db.exec(
      `UPDATE notes SET title = '${note.title}', body = '${note.body}' WHERE id = ${note.id};`
    );
    console.log(`${note.title} is Updated!`);
  }
  static Delete(id, callback) {
    console.log(id);
    db.exec(`DELETE FROM notes WHERE id = ${id};`, (err, data) => {
      if (err) console.error(err);
      else callback(data);
    });
    console.log(`${id} is Deleted!`);
  }
};
