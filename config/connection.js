// * required modules
require("dotenv").config(); // use environment variables
const mysql = require("mysql");
let connection;

// * Set up MySQL connection.
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Coding2020",
    database: "burgers_db",
  });
}

// * Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// * Export connection for our ORM to use.
module.exports = connection;
