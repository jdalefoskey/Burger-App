// * required modules
const connection = require("./connection");

// * ORM object creation
const orm = {
  selectAll(cb) {
    // only 1 table exists to select from
    const queryStr = "SELECT * FROM burgers";
    connection.query(queryStr, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne(burgerIn, cb) {
    // INSERT INTO burgers SET burger_name = "user entered burger"
    const queryStr = "INSERT INTO burgers SET ?";
    // burgerIn = { burger_name = "user entered burger" }
    connection.query(queryStr, burgerIn, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne(devourId, cb) {
    // UPDATE burgers SET devoured = true WHERE id = INT(id of devoured burger)
    const queryStr = "UPDATE burgers SET devoured = TRUE WHERE ?";
    // devourId is the id number of the burger the user has decided to devour
    connection.query(queryStr, devourId, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
};

// * export this module
module.exports = orm;
