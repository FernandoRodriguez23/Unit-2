//route for /login POST
//route for /dashboard GET

const express = require("express")
const { postLogin, getDashboard } = require("../controllers/login")
const router = express.Router()


router.route('/login').post(postLogin)
router.route('/dashboard').get(getDashboard)

module.exports = router