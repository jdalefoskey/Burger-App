require('dotenv').config()
const mysql = require('mysql')
let connection

// connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Coding2020',
    database: 'burgers_db'
  })
}

connection.connect(err => {
  if (err) {
    console.error(`error connecting: ${err.stack}`)
    return
  }
  console.log(`connected as id ${connection.threadId}`)
})

// export
module.exports = connection
