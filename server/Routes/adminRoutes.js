const { AdminLogin } = require('../Controllers/adminController')

const router = require('express').Router()


router.post("/login",AdminLogin)


module.exports = router