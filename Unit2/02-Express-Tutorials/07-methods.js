const express = require('express');
const app = express();
let {people} = require('./data');



app
    .use(express.static('./app'))
    .use(express.urlencoded({extended: false}))
    .use(express.json())
    .post('/login', (req, res) => {
        console.log(req.body);
        const {name} = req.body;
        res.send(`Welcome ${name}`);
    })
    .get('/api/people', (req, res) => {
        res.status(200).json({success: true, data: people})
    })
    .post('/api/people', (req, res) => {
        const name = req.body;
        if(!name){
            return res.status(400).json({success: false, msg: 'Please Enter a Name'});
        }
        people.push({id: new Date().getTime(), name})
        res.json({success: true, person: name})
    })
    //CRUD
    //Create - POST
    //Read - GET
    //Update - PUT | PATCH
    //Delete - DELETE
    .put('/api/people/:id', (req, res) => {
        const {id} = req.params;
        const {name} = req.body;

        const person = people.find((each) => each.id === 1*id);

        if(!person){
            return res.status(400).json({success: false, msg: `No Person Found with id - ${id}`})
        }
        const newPeople = people.map((person) => {
            if(person.id === 1*id){
                person.name = name
            }
            return person
        })

        people = newPeople;
        res.status(202).json({success: true, data: people});
    })
    .delete('/api/people/:id', (req, res) => {
        const {id} = req.params;

        const person = people.find((each) => each.id === 1*id);

        if(!person){
            return res.status(400).json({success: false, msg: `No Person Found with id - ${id}`})
        }

        newPeople = people.filter((person) => {
            return person.id !== 1*id;
        })
        people = newPeople;
        res.status(202).json({success: true, data: people});
    })
    .listen(3000, () => {
        console.log('Server Listening at Port 3000.....');
    })