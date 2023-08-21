const express = require('express');
const vulnerableFunction = require('../bad/vulnerability');

const badRoute = express.Router();

badRoute.get("/", (req, res) => {
    const userInput = req.query.input; //Assume the user provides input
    vulnerableFunction(userInput); //Simulating the use of vulnerable function
    res.send('Vulnerability triggered');
});

module.exports = badRoute;