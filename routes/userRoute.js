const router = require("express").Router()
const userController = require('../controller/userController')
const verifyJwt = require("../middleware/verifyJwt")

router.post('/',userController.createUser)

router.delete('/:id',verifyJwt,userController.deleteUser)

module.exports = router