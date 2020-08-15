//  required
const orm = require('../config/orm')

const burger = {
  all: cb => {
    orm.selectAll(res => {
      cb(res)
    })
  },

  create: (burgerIn, cb) => {
    orm.insertOne(burgerIn, res => {
      cb(res)
    })
  },

  update: (devourId, cb) => {
    orm.updateOne(devourId, res => {
      cb(res)
    })
  }
}

//  export
module.exports = burger
