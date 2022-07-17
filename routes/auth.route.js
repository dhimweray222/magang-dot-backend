const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/auth.controller')

router.post('/login', AuthController.login)
router.post('/register', AuthController.register)
router.put('/update',AuthController.update)
router.delete('/delete', AuthController.delete)
module.exports = router