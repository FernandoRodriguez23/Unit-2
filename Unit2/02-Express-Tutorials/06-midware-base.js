const express = require('express');
const app = express();
const morgan = require('morgan');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth')



app
    .use(morgan('dev'), auth)
    .get('/',  (req, res) => {
        res.send('Home Page');
    })
    .get('/help', (req, res) => {
        res.send('Help Page');
    })
    .listen(3000, () => {
        console.log("Server Listening at Port 3000....");
    })