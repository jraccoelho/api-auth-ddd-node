const express = require('express');

const User = require('../infrastructure/models/User');

const router = express.Router();


router.post('/register/', async (req, res) => {
    try {
        const newUser = new User({
            loginName: req.body.loginName,
            givenName: req.body.givenName,
            password: req.body.password,
            personalDocument: req.body.personalDocument,
            eMailAddress: req.body.eMailAddress
        });

        await newUser.save();

        return res.status(201).send({ newUser });
    } catch (err) {
        return res.status(400).send({
            error: "Error trying to create the user.",
            message: err.message
        });
    }
});

module.exports = app => app.use('/users', router);