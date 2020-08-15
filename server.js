//  required
const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./controllers/burgers_controller')

// port number
const PORT = process.env.PORT || 8787

// start express
const app = express()

app.use(express.static('public'))

// parse JSON
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// routes
app.use(routes)

app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT)
})
