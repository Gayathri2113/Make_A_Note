const router = require("express").Router()
const userController = require("../controllers/userController")
const auth = require("../middleware/auth")

// To register
router.post('/register', userController.registerUser)

// To login
router.post('/login', userController.loginUser)

// to verify the token
router.get('/verify', userController.verifiedToken  )



module.exports = router