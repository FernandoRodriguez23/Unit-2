const express = require("express")
const errHandlerMiddleware = require("./middleware/errorHandler")
const notFound = require("./middleware/notFound")
const app = express()
require("express-async-error")
const loginRouter = require('./router/login')
require('dotenv').config()
const port = process.env.PORT || 3000;


app
    .use([express.urlencoded({extended: false}), express.json()])
    .use(express.static('./public'))
    .use('/api/v1/', loginRouter)
    .use(notFound)
    .use(errHandlerMiddleware)

    .listen(3000, ()=> {
        console.log(`Listening @ ${port}`);
    })

//app

//middleware

//listen 300