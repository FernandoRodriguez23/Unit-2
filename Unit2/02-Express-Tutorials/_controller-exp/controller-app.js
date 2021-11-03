const express = require('express');
const app = express();

//~~~~~~~~~~~~ Routes Imports ~~~~~~~~~~~~~~~~~~~~~~~~~//
const people = require('./routes/people');
const auth = require('./routes/auth')

// ~~~~~~~~~~~~ App / Server ~~~~~~~~~~~~~~~~~~//

    // ~~~~~ Front end directory imports ~~~~~~~//
app.use((express.static('../app')))
    // ~~~~~~~~~~~~~~~~ Middleware ~~~~~~~~~~~~~~~~//
    .use([express.urlencoded({extended: false}), express.json()])


//~~~~~~~~~~~~~~~~~~ Routes ~~~~~~~~~~~~~~~//
    .use("/api/people", people)
    .use('/login', auth)

    .listen(3000, () => {
        console.log(`Listening @ 3000..........`);
    })

