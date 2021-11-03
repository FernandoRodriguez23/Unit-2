//controller for login
// returns JSON with msg Success

const {BadRequest} = require("../errors");
require('dotenv').config()
const jwt = require("jsonwebtoken")

//dashboards returns a jOSN with msg : "success and secret: this is secret"

const postLogin = (req, res) => {
    const {username, password} = req.body
    if(!username || !password){
        throw new BadRequest("Please enter a password or username");
    }

    //THE SECRECT PASSWORD SHOULD BE VERY HARD TO GUESS AND 256 BITS LONG
    //ran ONLY FOR EXAPMLE!! this will come from MONGO DB
    const id = new Date().getDate();

    //TRY TO KEEP THE PAYLOAD SMALL FOR USER EXPERIANCE
    //NEVER INCLUDE THE PASSWORD IN THE PAYLOAD, EVER!!!!!!!!
    const token = jwt.sign({id, username}, process.env.JTW_SECRET, {expiresIn: "30d"})
    

    res.json({msg: 'success - user created', token})
}

const getDashboard = (req,res) => {
    const luckyNum = Math.floor(Math.random() * 255)
    res.json({msg: 'success', secret: `lucky number ${luckyNum}`})
}

module.exports = {postLogin, getDashboard}