const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("notes.db");
//* example code
/*db.exec(
  "CREATE TABLE notes (id INT PRIMARY KEY, tite TEXT NOT NULL, body TEXT NOT NULL);"
);
db.exec("INSERT INTO notes VALUES(5, 'TEST', 'this is a good test');");
*/
db.all("SELECT * FROM notes", function (err, row) {
  if (err) {
    console.error(err);
  } else console.log(row);
});
