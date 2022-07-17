const express = require('express')
const router = express.Router()
const authRoutes = require('./auth.route')
const todoRoutes = require('./todo.route')

router.use('/user', authRoutes)
router.use('/todos', todoRoutes)

module.exports = router