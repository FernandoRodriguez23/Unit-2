const express = require('express')
const router = express.Router();

// let {people} = require('../../data');

router
.post('/', (req, res) => {
    console.log(req.body);
    const {name} = req.body;
    res.send(`Welcome ${name}`);
})

module.exports = router