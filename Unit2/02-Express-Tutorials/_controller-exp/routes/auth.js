const express = require('express')
const router = express.Router();

const {createLogin} = require('../controllers/ppl-controller')
// let {people} = require('../../data');

router.route('/login').post(createLogin)


module.exports = router