const connectDB = require('./db/connect');
require('dotenv').config()
const express = require('express')
const app = express();




const taskRouter = require('./routers/tasksRouter')



app
    // Front End
    .use(express.static('./public'))
    
    // MiddleWare
    .use([express.urlencoded({extended: false}), express.json()])

    //Routers
    .use('/api/v1/tasks', taskRouter)

    // Connect to DB Server
    //Then start app on successful connection
    const connect = async() => {
        try{
            await connectDB(process.env.MONGO_URL)
            //Listener
            app.listen(3000, () => {console.log("Listening @ 3000......");})
        } catch (err){
            console.log(err);
        }
    }
    
    connect()

    