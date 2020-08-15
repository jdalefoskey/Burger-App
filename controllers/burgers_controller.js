//  required
const express = require('express')
const burger = require('../models/burger')

const router = express.Router()

router.get('*', (req, res) => {
  burger.all(data => {
    const hbsObject = { burgers: data }

    res.render('index', hbsObject)
  })
})

router.post('/api/burgers', (req, res) => {
  burger.create(req.body, result => {
    console.log('added burger', result.insertId, req.body)

    res.json({ id: result.insertId })
  })
})

router.put('/api/burgers/:id', (req, res) => {
  burger.update({ id: req.params.id }, result => {
    if (result.changedRows === 0) return res.status(404).end()
    console.log('devoured burger ', req.params.id)
    res.status(200).end()
  })
})

//  export
module.exports = router
