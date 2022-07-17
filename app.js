const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes/index.route.js')
const errorHandler = require('./errorHandler')

app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

app.use(routes)
app.use(errorHandler)

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

module.exports = app
