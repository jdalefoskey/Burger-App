//required
const connection = require('./connection')

//  ORM
const orm = {
  selectAll (cb) {
    const queryStr = 'SELECT * FROM burgers'
    connection.query(queryStr, (err, result) => {
      if (err) throw err
      cb(result)
    })
  },
  insertOne (burgerIn, cb) {
    const queryStr = 'INSERT INTO burgers SET ?'

    connection.query(queryStr, burgerIn, (err, result) => {
      if (err) throw err
      cb(result)
    })
  },
  updateOne (devourId, cb) {
    const queryStr = 'UPDATE burgers SET devoured = TRUE WHERE ?'

    connection.query(queryStr, devourId, (err, result) => {
      if (err) throw err
      cb(result)
    })
  }
}

module.exports = orm
