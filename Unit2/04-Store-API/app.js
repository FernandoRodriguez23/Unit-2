const connectDB = require('./db/connect');
require('dotenv').config()
require("express-async-error")
const productsRouter = require('./routes/products')


const express = require("express");
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
const app = express();

const startServer = async() => {
    try{
        await connectDB(process.env.MONGO_URL)
        app
        .use([express.urlencoded({extended: false}), express.json()])
        .get("/", (req, res) => {res.send('home')})
        .use('/api/v1/products', productsRouter)
        .use(notFound)
        .use(errorHandler) 
        .listen(3000, () => {console.log('Listening @ 3000......')})
    }catch(err){
        console.log(err);
    }
}

startServer();

