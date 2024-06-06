const router = require("express").Router()

// To register
router.post('/register', (req,res) => {
    res.send({msg : "Register a User"})
})

// To login
router.post('/login', (req, res) => {
    res.send({ msg: "Login a User" })
})
module.exports = router