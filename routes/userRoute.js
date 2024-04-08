const express = require('express')
const router = express.Router()
const {getAllUsers, getOneUser, createOneUser} = require('../controllers/userController')

// Getting all 
router.get('/user',getAllUsers)
// Getting one
router.get('/card/:id',getOneUser)
// Creating one
router.post('/card',createOneUser)


module.exports = router
