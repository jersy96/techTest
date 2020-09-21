const express = require('express');
const personModel = require('../../models/Person');

const router = express.Router();
const Person = personModel.Person;

router.get('/persons', async (req, res) => {
    const persons = await Person.findAll();
    res.send({
        data: { persons }
    });
});

router.put('/persons/:id', async (req, res) => {
    const person = await Person.findByPk(req.params.id);
    if (req.body.thumb === 'up') {
        person.thumbsUp = person.thumbsUp + 1;
    } else {
        person.thumbsDown = person.thumbsDown + 1;
    }
    await person.save();
    res.send({
        data: { person }
    });
});

module.exports = {
    personsRoutes: router
};