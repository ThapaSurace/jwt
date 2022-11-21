const express = require("express")
const router = express.Router()
const postController = require('../controller/postController')
const verifyJwt = require("../middleware/verifyJwt")

router.post('/',verifyJwt,postController.createPost)


module.exports = router