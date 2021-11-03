const express = require('express')
const router = express.Router();

let {people} = require('../../data');

router
.get('/', (req, res) => {
    res.status(200).json({success: true, data: people})
})
.post('/', (req, res) => {
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
.put('/:id', (req, res) => {
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
.delete('/:id', (req, res) => {
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

module.exports = router