const express = require('express')
const router = express.Router();

const {deletePerson, updatePerson, createPerson, readPeople} = require('../controllers/ppl-controller');

// router
//     .get('/', readPeople)
//     .post('/', createPerson)
//     .put('/:id', updatePerson)
//     .delete('/:id', deletePerson)

router.route('/').get(readPeople).post(createPerson)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router