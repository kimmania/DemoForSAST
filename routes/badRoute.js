const express = require('express');
const vulnerableFunction = require('../bad/vulnerability');
const fetchData = require('../bad/bug');

const badRoute = express.Router();

badRoute.get("/", (req, res) => {
    const userInput = req.query.input; //Assume the user provides input
    vulnerableFunction(userInput); //Simulating the use of vulnerable function

    //contrivived example to demonstrate triggering a bug within SonarCloud
    const result = fetchData();
    console.log(result);
    res.send('Vulnerability triggered');
});

module.exports = badRoute;